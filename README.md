# awesomewm.d.ts

[![build](https://github.com/saksmt/awesomewm.d.ts/workflows/build/badge.svg)](https://github.com/saksmt/awesomewm.d.ts/actions?query=workflow%3Abuild+branch%3Adevelop) [![npm](https://img.shields.io/npm/v/awesomewm.4.3.d.ts)](https://www.npmjs.com/package/awesomewm.4.3.ts.d)

**Important**: this project is basically abandoned. See [ABANDONED.md](./ABANDONED.md) for details, reasons what *you* can do.

Typescript typings for [awesome window manager](https://github.com/awesomeWM/awesome) to be used with [typescript-to-lua](https://github.com/TypeScriptToLua/TypeScriptToLua) transpiler

## You did it. The crazy son of a bitch, you, did it?

Yes, it works; you can see default rc.lua fully ported to typescript in [example directory](./example/src/rc.ts)

## Any docs?

No, just types and good luck. Just joking. It doesn't make it a lie, though: currently there are no docs or docblocks.

As for now you can reference the original lua doc for each typed method/function and don't forget to checkout [installation](#installation--building) section

## Installation & building

### The easy way

Just copy [the example directory](https://github.com/saksmt/awesomewm.d.ts/tree/develop/example) and change the file dependency to an actual dependency (i.e replace `file:../typings` to an actual version), and you're ready to start hacking around.

### The long way

1. Initialize a node project normally `npm init` and all that
2. Add dependency on `awesomewm.4.3.d.ts`, `typescript-to-lua` (`^1.33.2`) and lua-types (`^2.13.1`)
3. Create `tsconfig.json` with the following content:
   ```json
   {
     "compilerOptions": {
       "target": "esnext",
       "lib": ["esnext"],
       "moduleResolution": "node",
       "types": ["lua-types/5.3", "@typescript-to-lua/language-extensions", "awesomewm.4.3.d.ts"],
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
5. Now you're ready to write your config with some typed goodies.

## Important notes

Typings here are provided to the best of my abilities to decode documentation on the awful widgets. From two different branches (4.3 and master). After a 4-year break from this code. Meaning they are imperfect at best.

## What doesn't work?

I've typed almost everything from awesome, but not quite... There are no types for:
 - `awful.util` - it is (was) mostly deprecated anyway
 - `awful.widget.watch` - I couldn't find any reason to do it since types will be more code than the source...
 - `awful.widget.keyboardlayout` - I do use two keymaps and I couldn't find anything useful about that particular widget
 - `beautiful.gtk` - it is not too hard, but useless from my point of view
 - `dbus` - maybe later
 - `drawable` - although there is `DrawableLike` which somewhat resembles it but only in data structure, there are no methods not sure if anyone would need such lowlevel stuff (well, at least I wasn't able to image it). After four years not paying attention to awesomewm it is gone not only from master but from 4.3 as well. So here's that. 
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

All the widget stack (wibox & awful.widget) is a total mess, it works, but you're better off repeatedlly flipping a coin to generate documentation in ASCII character-by-characted to guess what methods do what, what extends what, what accepts what and why.

## Tests?

No, and probably won't ever be for two reasons:
1. I don't know how to write tests on typings
2. My config (a relatively hacky one) works.
3. I've abandoned this project.

## More complex examples?

Here is a [sample](https://github.com/saksmt/awesomewm-iwm) (imperfect and hacky, but works)

## Bugs

Of course, as in awesome, in awesome typings there are no bugs. But there may be unexpected behaviors.

~~So report them as soon as you find them or even fix and pull-request!~~

## Why?

1. Because I can. If there was a way to transpile JS to lua I'd even write typings for scalajs.
2. I'm not that good of a coder to keep all the invariants resolved by types along with actual logic, I've spent hours digging through sources of awesome to find out what value is expected where and why. And I did it for the last time (yeah, right). Now it is compilers' task.

## License

This library is licensed under [MIT](LICENSE) license. For licenses on awesome, typescript and tstl see corresponding pages.
