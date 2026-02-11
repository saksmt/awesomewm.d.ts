# What can I do?

If you've stumbled upon this repo – that probably meeans you're dissatisfied with either lua, awesomewm docs or both. So chances are you'd be better off searching for replacement for awesomewm.

If you're still keen on staying with awesomewm and still want some typesafety in your life - you can either:
 - use this lib if that works for you
 - fork it and fix any issues that bother you (if you're serious about it I can even mention your fork in readme as a successor)
 - try your hand at writing types using this repo as a reference. Typings for master should be easier to do, given improved luadoc, though you're left with no guarantees of stability (you can try to slap nix somewhere along the way in an attempt to make it more reproducible and stable).

# Is awesomewm bad/dead/not worth it?

No. It works just fine if you don't dig too deep into code design quality (or you don't care much). Or if you don't need to do such deep customizations.

Development is still very much alive, though looks understaffed. And there may even come a new version in the future (how long would that take is another question entirely). 

Things of note that **are** concerning:
 - no concrete plans for anything basically
 - no support for Wayland, which is okay for now, but whether that'll hold depends on whims of distros (and maybe even video card manufacturers, which is arguably worse)
 - management looks wonky from the outside perspective.

# For maintainers of awesomewm (for me to not look like a jerk)

In the off chance that some contributor or maintainer of awesomewm stumbles upon this:

First of all, thank you for your efforts.

You've made tremendous leap in code quality judging by apidoc on master using abysmally meager resources. Trying to make right on the giant ill-structured mudball (haphazardly merged subpar quality code from loads of contributors with zero to no documentation in an untyped language without lint) is an unquantifiably painful and difficult task.

You can use types in this repo as an outside perspective on actual structure of awesomewm, it's documentation and a glimpse of sources as of 4.3 with some insights picked from master as of 2021. 

# Why you've abandoned it? (rant)

I've just spent an unholy amount of time to try to figure out what classes and modules there are, what they do and what relationships they have. Again. For example, what `attach` method actually accepts, what is the actual class hierarchy of widget: what is the base type, what extends `awful.popup`, what extends `wibox.widget`, where `wibar` comes into play, etc. At first I tried to dig through 4.3 luadoc which is a mess to say the least, then luadoc on master which is vastly different, improved a lot, but still a mess.

## The story

I needed to update npm packages to do some stuff, that lead to me updating tstl which broke if not everything then a lot.

While fixing things, I've decided to finally fix the problem of my incorrect understanding of how .d typings work in typescript. That led to a full rewrite of the structure of the whole thing.

As a side note, thanks to authors of [typed-factorio](https://github.com/GlassBricks/typed-factorio) and [isaacscript](https://github.com/IsaacScript/isaacscript) for providing such a great reference material, my infinite gratitude to the latter for linking an old [question on SO](https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts) pertaining to quirk of how typescript handles .d files and modules.

Along the way I've tried to clean up a bit and restructure things around. That required remembering and again digging through luadoc. 

That's when I ~~(lost all hope in humanity, got a permanent migraine and decided that a carrier path change at my age is not so bad)~~ noticed that luadoc for 4.3 CHANGED in those five years I haven't looked at it.

Then I checked out awesomewm repo: no concrete plans for the next release (due to "not being good enough"), the last release was in 2019, issue proposing rolling release cycle is basically rejected due to "possible regressions" and "causing more harm than good," actual diff between 4.3 and master is obscenely large judging by the luadoc.
So lua part basically will never receive a new version.

Core C backend part does not evolve either, all the attempts at supporting Wayland have been abandoned and were never actually by main contributors/maintainers of awesome itself, nor were they in the same org.
So it is basically dead too, if not - it may be in a couple more years if support for X11 wanes further, especially from video drivers.

That means that the two parts making awesomewm an awesomewm are not in a good place to say the least.

For me all that (along with fatigue of digging through subpar quality doc and code) means that I'm better off redirecting my efforts to finally migrating away from awesome to something else. Probably hyprland with hackery around IPC and/or some shell framework (maybe of my own making).
