import { Index, ModifierKey, NaturalNumber } from '../common';
import { PatternRef } from '../gears/color';
import { FontRef } from '../pango/font';
import { Widget } from '../wibox/Widget';

type MaybeEither<T> = T | MultiReturn<[T, boolean]>;

export type CommonPromptArgs = {
  fg_cursor: PatternRef;
  bg_cursor: PatternRef;
  ul_cursor: PatternRef;
  font: FontRef;
  autoexec: boolean;
  highlighter: (this: void, before: string, after: string) => MultiReturn<[string, string]>;
  exe_callback: (this: void, command: string) => void;
  completion_callback: (
    this: void,
    commandBeforeCompletion: string,
    currentPosition: Index,
    indexOfCompleted: Index,
  ) => MultiReturn<[string, Index, Index]>;
  history_path: string;
  done_callback: (this: void) => void;
  changed_callback: (this: void, command: string) => void;
  keypressed_callback: (this: void, modifiers: ModifierKey[], key: string, command: string) => void;
  keyreleased_callback: (
    this: void,
    modifiers: ModifierKey[],
    key: string,
    command: string,
  ) => void;
  hook: (this: void, command: string) => MaybeEither<void | string | true>;
};

type NoVisualPromptArgs = CommonPromptArgs & {
  prompt: string;
  text: string;
  selectall: boolean;
  textbox: Widget;
  history_max: NaturalNumber;
};

export type PromptModule = {
  run(this: void, args: Partial<NoVisualPromptArgs>): void;
};
