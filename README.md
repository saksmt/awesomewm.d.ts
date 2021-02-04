# awesomewm.ts.d

![build](https://github.com/saksmt/awesomewm.d.ts/workflows/build/badge.svg) ![npm](https://img.shields.io/npm/v/awesomewm.4.3.ts.d)

Typescript typings for [awesome window manager](https://github.com/awesomeWM/awesome) to be used with
[typescript-to-lua](https://github.com/TypeScriptToLua/TypeScriptToLua) transpiler

## You did it. The crazy son of bitch, you, did it?

Yes, it works, you can see default rc.lua fully ported to typescript in [example directory](./example/src/rc.ts)

## Any docs?

No, just types and good luck. Just joking. It doesn't make it a lie though:
currently there are no docs or docblocks, but maybe I'll find some strength and add at least doc blocks.

As for now you can reference original lua doc for each typed method/function and don't forget to checkout [installation](#installation--building)
section

## Installation & building

### The easy way

Just copy [example](example) directory and change file dependency to actual dependency and you're ready to start hacking around.

### The long way

1. Initialize node project normally `npm init` and all that
2. Add dependency on `awesomewm.4.3.ts.d` and `typescript-to-lua` (`^0.37.1`)
3. Create `tsconfig.json` with following content:
   ```json
   {
     "compilerOptions": {
       "target": "esnext",
       "lib": ["esnext"],
       "moduleResolution": "node",
       "types": ["lua-types/5.3", "typescript-to-lua/language-extensions", "awesomewm.4.3.ts.d"],
       "strict": true,
       "rootDir": "src"
     },
     "tstl": {
       "luaTarget": "5.3",
       "noImplicitSelf": true,
       "noHeader": true,
       "luaBundle": "./rc.lua",
       "luaBundleEntry": "./src/rc.ts"
     }
   }
   ```
4. (optional) Add build task `tstl`
5. Due to [bug](https://github.com/TypeScriptToLua/TypeScriptToLua/issues/975) in tstl or my misunderstanding of how typescript works (if
   so, please guide the stupid me to enlightenment) you'll need to define modules:
   ```typescript
   /** @noResolution */
   declare module 'awful' {
     export * from 'awesomewm.4.3.ts.d/awful';
   }
   
   /** @noResolution */
   declare module 'awful.hotkeys_popup' {
     export * from 'awesomewm.4.3.ts.d/awful.hotkeys_popup';
   }
   
   /** @noResolution */
   declare module 'awful.remote';
   
   /** @noResolution */
   declare module 'beautiful' {
     import * as beautiful from 'awesomewm.4.3.ts.d/beautiful';
     export = beautiful;
   }
   
   /** @noResolution */
   declare module 'gears' {
     export * from 'awesomewm.4.3.ts.d/gears';
   }
   
   /** @noResolution */
   declare module 'naughty' {
     export * from 'awesomewm.4.3.ts.d/naughty';
   }
   
   /** @noResolution */
   declare module 'menubar' {
     export * from 'awesomewm.4.3.ts.d/menubar';
   }
   
   /** @noResolution */
   declare module 'wibox' {
     export * from 'awesomewm.4.3.ts.d/wibox';
   }
   
   /** @noResolution */
   declare module 'oocairo' {
     export * from 'awesomewm.4.3.ts.d/oocairo';
   }
   ```
6. Now you're ready to write you're config with some typed goodies.

## Important notes

You may import types and enums from anywhere (both `awful` and `awesomewm.4.3.ts.d/awful` are good), but you **must**
import symbols (functions, consts, etc) only from modules named as in awesome itself (i.e. from `awful`, not `awesomewm.4.3.ts.d/awful`)

Otherwise, it will fail in runtime.

You may want to pay attention to [this bug](https://github.com/TypeScriptToLua/TypeScriptToLua/issues/976) if you've decided 
to split your single `rc.ts` into files and more importantly packages since it will blow up in runtime and not on compiletime.

## What doesn't work?

I've typed almost everything from awesome, but not quite... There are no types for:
 - `awful.util` - it is mostly deprecated anyway
 - `awful.widget.watch` - I couldn't find any reason to do it since types will be more code than the source...
 - `awful.widget.keyboardlayout` - I do use two keymaps and I couldn't find anything useful about that particular widget
 - `beautiful.gtk` - it is not too hard, but useless from my point of view :peka:
 - `dbus` - maybe later
 - `drawable` - although there is `DrawableLike` which somewhat resembles it but only in data structure, there are no methods
                not sure if anyone would need such lowlevel stuff (well, at least I wasn't able to image it)
 - `gears.cache`
 - `gears.math` - too easy to write this module in typescript alone
 - `gears.matrix` - there is `oocairo` matrix though
 - `gears.object`
 - `gears.protected_call` - ¯\_(ツ)_/¯
 - `gears.sort` - again - no need for topological sort in almost any usecase
 - `gears.string` - either already provided by typescript or useless or I just couldn't care enough
 - `gears.table` - not fully typed and probably existing typing is useless too
 - `gears.wallpaper` - can either be easily done through `oocairo` typings and `gears.surface.from_shape()` or too lowlevel
 - `mousegrabber` - it may be useful, but just too tired
 - `naughty.dbus` - don't know if it is useful
 - `root` - it is not fully typed, but existing typings should probably be enough
 - `selection` - later
 - `xproperties` - not sure about usefulness

Everything else should work fine although some typings may be incomplete

## Tests?

No, and probably won't ever be for two reasons:
1. I don't know how to write tests on typings
2. I'm currently rewriting my 5 years old config which uses lots of aspects of awesome, and it is THE ultimate test.

## More complex examples?

On the way - rewriting my current config right now (not in public git for now).

## Bugs

Of course, as in awesome, in awesome typings there are no bugs. But there may be unexpected behaviors.

So report them as soon as you find them or even fix and pull-request!

## Why?

1. Because I can. If there was a way to transpile JS to lua I'd even write typings for scalajs.
2. I'm not that good of a coder to keep all the invariants resolved by types along with actual logic, I've spent hours digging through
   sources of awesome to find out what value is expected where and why. And I did it for the last time, now it is compilers' task.

## License

This library is licensed under [MIT](LICENSE) license. For licenses on awesome, typescript and tstl see corresponding pages.
