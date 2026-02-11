/** @noResolution */
declare module '_beautiful' {
  import { PatternRef, FontRef } from 'gears';

  export type PromptVariables = {
    prompt_fg_cursor: PatternRef;
    prompt_bg_cursor: PatternRef;
    prompt_font: FontRef;
    prompt_bg: PatternRef;
    prompt_fg: PatternRef;
  };
}
