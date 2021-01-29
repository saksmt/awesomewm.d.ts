/** @noResolution */

import * as menuDefs from './awesomewm/awful/menu';
import * as tagM from './awesomewm/awful/tag';
import * as layoutM from './awesomewm/awful/layout';
import * as clientM from './awesomewm/awful/client';
import * as screenM from './awesomewm/awful/screen';
import * as buttonM from './awesomewm/awful/button';
import * as mouseM from './awesomewm/awful/mouse';
import * as keyM from './awesomewm/awful/key';
import * as spawnM from './awesomewm/awful/spawn';
import * as promptM from './awesomewm/awful/prompt';
import * as placementM from './awesomewm/awful/placement';
import * as wibarM from './awesomewm/awful/widgets/wibar';
import * as keygrabberM from './awesomewm/awful/keygrabber';
import * as popupM from './awesomewm/awful/widgets/popup';
import * as tooltipM from './awesomewm/awful/widgets/tooltip';
import { IntegralNumber } from './awesomewm/common';
import { Rule } from './awesomewm/awful/rules';
import * as widgetM from './awesomewm/awful/widgets';
import { Table } from './gears';

export type MenuDefinition = menuDefs.MenuDefinition;
export type MenuItemDefinition = menuDefs.MenuItemDefinition;
export type Menu = menuDefs.Menu;
declare const menu: {
  (
    this: void,
    menuDefinition: MenuDefinition | MenuItemDefinition[] | (MenuDefinition & MenuItemDefinition[]),
  ): Menu;

  client_list(
    this: void,
    args?: Partial<MenuDefinition | MenuItemDefinition[] | (MenuDefinition & MenuItemDefinition[])>,
    itemArgs?: Table,
    filter?: (this: void, client: Client) => boolean,
  ): Menu;
};

export type Layout = layoutM.Layout;
declare const layout: {
  layouts: Layout[];
  suit: layoutM.Layouts;
  inc(this: void, amount: IntegralNumber): void;
};

declare const placement: placementM.PlacementModule;

export type Tag = tagM.Tag;
declare const tag: tagM.TagModule;
export type MasterFillPolicy = tagM.MasterFillPolicy;

export type Client = clientM.Client;
declare const client: clientM.ClientModule;
export type ShapeType = clientM.ShapeType;
export type WindowType = clientM.WindowType;

export type Screen = screenM.Screen;
export type ScreenRef = screenM.ScreenRef;
declare const screen: screenM.ScreenModule;

export type Button<T> = buttonM.Button<T>;
declare const button: buttonM.ButtonModule;

export type Key<T> = keyM.Key<T>;
declare const key: keyM.KeyModule;

declare const spawn: spawnM.SpawnModule;

export type Wibar = wibarM.Wibar;
declare const wibar: wibarM.WibarModule;

declare const keygrabber: keygrabberM.KeygrabberModule;
export type Keygrabber = keygrabberM.Keygrabber;
export type KeygrabberHandle = keygrabberM.KeygrabberHandle;

declare const mouse: mouseM.MouseModule;

declare const popup: popupM.PopupModule;
export type Popup = popupM.Popup;

declare const prompt: promptM.PromptModule;

declare const tooltip: tooltipM.TooltipModule;
export type Tooltip = tooltipM.Tooltip;

declare const widget: typeof widgetM;

declare const util: {
  eval(code: string): unknown;
};

declare const rules: {
  rules: Rule[];
};
