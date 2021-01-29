import * as naughty from 'naughty';
import * as beautiful from 'beautiful';
import * as gears from 'gears';
import { filesystem as fs, table } from 'gears';
import * as awful from 'awful';
import { Client, MenuItemDefinition, Screen, tag, Tag } from 'awful';
import * as menubar from 'menubar';
import * as wibox from 'wibox';
import { layout } from 'wibox';
import { option } from './option';
import { AlignCross, ModifierKey, MouseButton } from 'awesomewm.4.3.ts.d';
import * as hotkeys_popup from 'awful.hotkeys_popup';
import { setupWidget } from './widget-util';

if (awesome.startup_errors) {
  naughty.notify({
    preset: naughty.config.presets.critical,
    title: 'Oops, there were errors during startup!',
    text: awesome.startup_errors,
  });
}

let in_error = false;
awesome.connect_signal('debug::error', (err) => {
  if (!in_error) {
    in_error = true;
    naughty.notify({
      preset: naughty.config.presets.critical,
      title: 'Oops, an error happened!',
      text: err.toString(),
    });
  }
});

beautiful.init(`${fs.get_themes_dir()}/default/theme.lua`);

const terminal = 'xterm';
const editor = option(os.getenv('EDITOR')).getOrElse('vim');
const editorCmd = `${terminal} -e ${editor}`;

const modkey = ModifierKey.Mod1;
awful.layout.layouts = [
  awful.layout.suit.floating,
  awful.layout.suit.tile,
  awful.layout.suit.tile.left,
  awful.layout.suit.tile.bottom,
  awful.layout.suit.tile.top,
  awful.layout.suit.fair,
  awful.layout.suit.fair.horizontal,
  awful.layout.suit.spiral,
  awful.layout.suit.spiral.dwindle,
  awful.layout.suit.max,
  awful.layout.suit.max.fullscreen,
  awful.layout.suit.magnifier,
  awful.layout.suit.corner.nw,
];

const myAwesomeMenu: MenuItemDefinition[] = [
  ['hotkeys', () => hotkeys_popup.show_help()],
  ['manual', `${terminal} -e man awesome`],
  ['edit config', `${editorCmd} ${fs.get_configuration_dir()}/src/rc.ts`],
  ['restart', awesome.restart],
  ['quit', () => awesome.quit()],
];

const myMainMenu = awful.menu([
  ['awesome', myAwesomeMenu, beautiful.awesome_icon],
  ['open terminal', terminal],
]);

const myLauncher = awful.widget.launcher({ image: beautiful.awesome_icon, menu: myMainMenu });
menubar.utils.terminal = terminal;

const myTextClock = wibox.widget.textclock();

const taglistButtons = table.join<awful.Button<Tag>>(
  awful.button([], MouseButton.Left, (it) => it.view_only()),
  awful.button([modkey], MouseButton.Left, (it) =>
    option(client.focus).forEach((t) => t.move_to_tag(it)),
  ),
  awful.button([], MouseButton.Right, tag.viewtoggle),
  awful.button([modkey], MouseButton.Right, (it) =>
    option(client.focus).forEach((t) => t.toggle_tag(it)),
  ),
  awful.button([], MouseButton.ScrollDown, (it) => tag.viewnext(it.screen)),
  awful.button([], MouseButton.ScrollUp, (it) => tag.viewprev(it.screen)),
);

const tasklistButtons = table.join<awful.Button<Client>>(
  awful.button([], MouseButton.Left, (it) => {
    if (it == client.focus) {
      it.minimized = true;
    } else {
      it.emit_signal('request::activate', 'taglist', { raise: true });
    }
  }),
  awful.button([], MouseButton.Right, () => awful.menu.client_list({ theme: { width: 250 } })),
  awful.button([], MouseButton.ScrollUp, () => awful.client.focus.byidx(1)),
  awful.button([], MouseButton.ScrollDown, () => awful.client.focus.byidx(-1)),
);

const setWallpaper = (s: Screen) => {
  if (beautiful.wallpaper) {
    gears.wallpaper.maximized(
      typeof beautiful.wallpaper == 'function' ? beautiful.wallpaper(s) : beautiful.wallpaper,
    );
  }
};

screen.connect_signal('property::geometry', setWallpaper);

awful.screen.connect_for_each_screen((s) => {
  setWallpaper(s);
  tag(
    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((it) => it.toString()),
    s,
    awful.layout.layouts[0],
  );

  const myPromptBox = awful.widget.prompt();
  s.myPromptBox = myPromptBox;
  const myLayoutBox = awful.widget.layoutbox(s);
  s.myLayoutBox = myLayoutBox;
  myLayoutBox.buttons(
    table.join(
      awful.button([], MouseButton.Left, () => awful.layout.inc(1)),
      awful.button([], MouseButton.Right, () => awful.layout.inc(-1)),
      awful.button([], MouseButton.ScrollDown, () => awful.layout.inc(1)),
      awful.button([], MouseButton.ScrollUp, () => awful.layout.inc(-1)),
    ),
  );
  const myTagList = awful.widget.taglist({
    screen: s,
    buttons: taglistButtons,
    filter: awful.widget.taglist.filter.all,
  });
  s.myTagList = myTagList;
  const myTaskList = awful.widget.tasklist({
    screen: s,
    buttons: tasklistButtons,
    filter: awful.widget.tasklist.filter.currenttags,
  });
  s.myTaskList = myTaskList;

  const myWibox = awful.wibar({
    position: AlignCross.Top,
    screen: s,
  });
  s.myWibox = myWibox;

  setupWidget(myWibox)({
    children: [
      layout.fixed.horizontal(myLauncher, myTagList, myPromptBox),
      myTaskList,
      layout.fixed.horizontal(wibox.widget.systray(), myTextClock, myLayoutBox),
    ],
    layout: layout.align.horizontal,
  });
});

root.buttons(
  table.join(
    awful.button([], MouseButton.Right, () => myMainMenu.show()),
    awful.button([], MouseButton.ScrollUp, (it) => tag.viewnext(it)),
    awful.button([], MouseButton.ScrollUp, (it) => tag.viewprev(it)),
  ),
);

const globalKeys = table.join<awful.Key<Screen>>(
  awful.key<Screen>([modkey], 'Left', tag.viewprev, {
    description: 'view previous',
    group: 'tag',
  }),
  awful.key<Screen>([modkey], 'Right', tag.viewnext, {
    description: 'view next',
    group: 'tag',
  }),
  awful.key<Screen>([modkey], 'Escape', tag.history.restore, {
    description: 'go back',
    group: 'tag',
  }),
  awful.key([modkey], 's', () => hotkeys_popup.show_help(), {
    description: 'show help',
    group: 'awesome',
  }),
  awful.key([modkey], 'j', () => awful.client.focus.byidx(1), {
    description: 'focus next',
    group: 'client',
  }),
  awful.key([modkey], 'k', () => awful.client.focus.byidx(-1), {
    description: 'focus previous',
    group: 'client',
  }),
  awful.key([modkey], 'w', () => myMainMenu.show(), { description: 'show menu', group: 'awesome' }),
  awful.key([modkey, ModifierKey.Shift], 'j', () => awful.client.swap.byidx(1), {
    description: 'swap with next client by index',
    group: 'client',
  }),
  awful.key([modkey, ModifierKey.Shift], 'k', () => awful.client.swap.byidx(-1), {
    description: 'swap with previous client by index',
    group: 'client',
  }),
  awful.key([modkey, ModifierKey.Control], 'j', () => awful.screen.focus_relative(1), {
    description: 'focus next screen',
    group: 'screen',
  }),
  awful.key([modkey, ModifierKey.Control], 'k', () => awful.screen.focus_relative(-1), {
    description: 'focus previous screen',
    group: 'screen',
  }),
  awful.key(
    [modkey],
    'Tab',
    () => {
      awful.client.focus.history.previous();
      option(client.focus).forEach((it) => it.raise());
    },
    { description: 'go back', group: 'client' },
  ),
  awful.key([modkey], 'Return', () => awful.spawn(terminal), {
    description: 'open a terminal',
    group: 'launcher',
  }),
  awful.key([modkey, ModifierKey.Control], 'r', awesome.restart, {
    description: 'reload awesome',
    group: 'awesome',
  }),
  awful.key([modkey, ModifierKey.Shift], 'q', () => awesome.quit(), {
    description: 'quit',
    group: 'awesome',
  }),
  awful.key([modkey], 'l', () => tag.incwmfact(0.05), {
    description: 'increase master width factor',
    group: 'layout',
  }),
  awful.key([modkey], 'h', () => tag.incwmfact(-0.05), {
    description: 'decrease master width factor',
    group: 'layout',
  }),
  awful.key([modkey, ModifierKey.Shift], 'h', () => tag.incnmaster(1, null, true), {
    description: 'increase the number of master clients',
    group: 'layout',
  }),
  awful.key([modkey, ModifierKey.Shift], 'l', () => tag.incnmaster(-1, null, true), {
    description: 'decrease the number of master clients',
    group: 'layout',
  }),
  awful.key([modkey, ModifierKey.Control], 'h', () => tag.incncol(1, null, true), {
    description: 'increase the number of columns',
    group: 'layout',
  }),
  awful.key([modkey, ModifierKey.Control], 'l', () => tag.incncol(-1, null, true), {
    description: 'decrease the number of columns',
    group: 'layout',
  }),
  awful.key([modkey], 'space', () => awful.layout.inc(1), {
    description: 'select next',
    group: 'layout',
  }),
  awful.key([modkey, ModifierKey.Shift], 'space', () => awful.layout.inc(-1), {
    description: 'select previous',
    group: 'layout',
  }),
  awful.key(
    [modkey, ModifierKey.Control],
    'n',
    () =>
      option(awful.client.restore()).forEach((it) =>
        it.emit_signal('request::activate', 'key.unminimize', { raise: true }),
      ),
    { description: 'restore minimized', group: 'client' },
  ),
  awful.key(
    [modkey],
    'r',
    () => option(awful.screen.focused()).forEach((it) => it.myPromptBox.run()),
    {
      description: 'run prompt',
      group: 'launcher',
    },
  ),
  awful.key(
    [modkey],
    'x',
    () =>
      option(awful.screen.focused()).forEach((it) =>
        awful.prompt.run({
          prompt: 'Run Lua code: ',
          textbox: it.myPromptBox.widget,
          exe_callback: awful.util.eval,
          history_path: `${fs.get_cache_dir()}/history_eval`,
        }),
      ),
    { description: 'lua execute prompt', group: 'awesome' },
  ),
  awful.key([modkey], 'p', () => menubar.show(), {
    description: 'show the menubar',
    group: 'launcher',
  }),
);

const tagKeys = range(1, 9)
  .map((tagName) =>
    table.join<awful.Key<Screen>>(
      awful.key(
        [modkey],
        `#${tagName + 9}`,
        () =>
          option(awful.screen.focused())
            .andThen((it) => it.tags[tagName - 1])
            .forEach((it) => it.view_only()),
        { description: `toggle tag #${tagName}`, group: 'tag' },
      ),
      awful.key(
        [modkey, ModifierKey.Control],
        `#${tagName + 9}`,
        () =>
          option(awful.screen.focused())
            .andThen((it) => it.tags[tagName - 1])
            .forEach(tag.viewtoggle),
        { description: `toggle tag #${tagName}`, group: 'tag' },
      ),
      awful.key(
        [modkey, ModifierKey.Shift],
        `#${tagName + 9}`,
        () =>
          option(awful.screen.focused())
            .andThen((it) => it.tags[tagName - 1])
            .zipMap(option(client.focus))((t, c) => c.move_to_tag(t)),
        { description: `move focused client to tag #${tagName}`, group: 'tag' },
      ),
      awful.key(
        [modkey, ModifierKey.Shift, ModifierKey.Control],
        `#${tagName + 9}`,
        () =>
          option(awful.screen.focused())
            .andThen((it) => it.tags[tagName - 1])
            .zipMap(option(client.focus))((t, c) => c.toggle_tag(t)),
        { description: `toggle focused client on tag #${tagName}`, group: 'tag' },
      ),
    ),
  )
  .reduce((a, b) => table.join(a, b));

root.keys(table.join(globalKeys, tagKeys));

const clientButtons = table.join<awful.Button<Client>>(
  awful.button([], MouseButton.Left, (it) =>
    it.emit_signal('request::activate', 'mouse_click', { raise: true }),
  ),
  awful.button([modkey], MouseButton.Left, (it) => {
    it.emit_signal('request::activate', 'mouse_click', { raise: true });
    awful.mouse.client.move(it);
  }),
  awful.button([modkey], MouseButton.Right, (it) => {
    it.emit_signal('request::activate', 'mouse_click', { raise: true });
    awful.mouse.client.resize(it);
  }),
);

const clientKeys = table.join<awful.Key<Client>>(
  awful.key(
    [modkey],
    'f',
    (c) => {
      c.fullscreen = !c.fullscreen;
      c.raise();
    },
    { description: 'toggle fullscreen', group: 'client' },
  ),
  awful.key([modkey, ModifierKey.Shift], 'c', (it) => it.kill(), {
    description: 'close',
    group: 'client',
  }),
  awful.key([modkey, ModifierKey.Control], 'space', (it) => (it.floating = !it.floating), {
    description: 'toggle floating',
    group: 'client',
  }),
  awful.key([modkey, ModifierKey.Control], 'Return', (it) => it.swap(awful.client.getmaster()), {
    description: 'move to master',
    group: 'client',
  }),
  awful.key([modkey], 'o', (it) => it.move_to_screen(), {
    description: 'move to screen',
    group: 'client',
  }),
  awful.key([modkey], 't', (it) => (it.ontop = !it.ontop), {
    description: 'toggle keep on top',
    group: 'client',
  }),
  awful.key([modkey], 'n', (it) => (it.minimized = true), {
    description: 'minimize',
    group: 'client',
  }),
  awful.key(
    [modkey],
    'm',
    (it) => {
      it.maximized = !it.maximized;
      it.raise();
    },
    { description: '(un)maximize', group: 'client' },
  ),
  awful.key(
    [modkey],
    'm',
    (it) => {
      it.maximized_vertical = !it.maximized_vertical;
      it.raise();
    },
    { description: '(un)maximize vertically', group: 'client' },
  ),
  awful.key(
    [modkey, ModifierKey.Shift],
    'm',
    (it) => {
      it.maximized_horizontal = !it.maximized_horizontal;
      it.raise();
    },
    { description: '(un)maximize horizontally', group: 'client' },
  ),
);

awful.rules.rules = [
  {
    rule: {},
    properties: {
      border_width: beautiful.border_width,
      border_color: beautiful.border_normal,
      focus: awful.client.focus.filter,
      raise: true,
      keys: clientKeys,
      buttons: clientButtons,
      screen: awful.screen.preferred,
      placement: awful.placement.no_overlap + awful.placement.no_offscreen,
    },
  },
  {
    rule_any: {
      instance: ['DTA', 'copyq', 'pinentry'],
      class: [
        'Arandr',
        'Blueman-manager',
        'Gpick',
        'Kruler',
        'MessageWin',
        'Sxiv',
        'Tor Browser',
        'Wpa_gui',
        'veromix',
        'xtightvncviewer',
      ],
      name: ['Event Tester'],
      role: ['AlarmWindow', 'ConfigManager', 'pop-up'],
    },
    properties: { floating: true },
  },
  {
    rule_any: { type: ['normal', 'dialog'] },
    properties: { titlebars_enabled: true },
  },
];

client.connect_signal('manage', (it) =>
  awesome.startup && !it.size_hints.user_position && !it.size_hints.program_position
    ? awful.placement.no_offscreen(it)
    : {},
);

client.connect_signal('mouse::enter', (it) =>
  it.emit_signal('request::activate', 'mouse_enter', { raise: false }),
);

client.connect_signal('focus', (it) => (it.border_color = beautiful.border_focus));
client.connect_signal('unfocus', (it) => (it.border_color = beautiful.border_normal));

function range(start: number, endInclusive: number, step = 1): number[] {
  const result = [];
  for (let i = start; i <= endInclusive; i += step) {
    result.push(i);
  }
  return result;
}
