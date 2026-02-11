/// <reference path="./key.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { FontRef, PatternRef } from 'gears';
  import { Widget } from 'wibox';

  type MaybeEither<T> = T | LuaMultiReturn<[T, boolean]>;

  export const prompt: {
    run(this: void, args: Partial<Prompt.NoVisualArgs>): void;
  };
  export namespace Prompt {
    export type Args = {
      fg_cursor: PatternRef;
      bg_cursor: PatternRef;
      ul_cursor: PatternRef;
      font: FontRef;
      autoexec: boolean;
      highlighter: (this: void, before: string, after: string) => LuaMultiReturn<[string, string]>;
      exe_callback: (this: void, command: string) => void;
      completion_callback: (
        this: void,
        commandBeforeCompletion: string,
        currentPosition: Index,
        indexOfCompleted: Index,
      ) => LuaMultiReturn<[string, Index, Index]>;
      history_path: string;
      done_callback: (this: void) => void;
      changed_callback: (this: void, command: string) => void;
      keypressed_callback: (
        this: void,
        modifiers: Keyboard.ModifierKey[],
        key: string,
        command: string,
      ) => void;
      keyreleased_callback: (
        this: void,
        modifiers: Keyboard.ModifierKey[],
        key: string,
        command: string,
      ) => void;
      hook: (this: void, command: string) => MaybeEither<void | string | true>;
    };

    type NoVisualArgs = Args & {
      prompt: string;
      text: string;
      selectall: boolean;
      textbox: Widget;
      history_max: NaturalNumber;
    };
  }
}
