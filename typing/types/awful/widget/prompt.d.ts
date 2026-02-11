/// <reference path="../prompt.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { container, Widget } from 'wibox';

  type PromptArgs = Prompt.Args;
  export namespace widget {
    export interface Prompt extends container.Background, PromptArgs {
      prompt: string;
      with_shell: boolean;

      run(): void;
    }

    export const prompt: Widget.Constructor<(this: void) => Prompt> & {
      with_shell: boolean;
    };
  }
}
