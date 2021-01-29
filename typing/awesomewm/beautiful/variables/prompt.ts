import { PatternRef } from '../../gears/color';
import { FontRef } from '../../pango/font';

export type PromptVariables = {
  prompt_fg_cursor: PatternRef;
  prompt_bg_cursor: PatternRef;
  prompt_font: FontRef;
  prompt_bg: PatternRef;
  prompt_fg: PatternRef;
};
