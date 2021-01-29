import { BackgroundContainer } from '../../wibox/containers/BackgroundContainer';
import { WidgetConstructor } from '../../../wibox';
import { CommonPromptArgs } from '../prompt';

export interface Prompt extends BackgroundContainer, CommonPromptArgs {
  prompt: string;
  with_shell: boolean;
}

export type PromptModule = WidgetConstructor<(this: void) => Prompt> & {
  with_shell: boolean;
};
