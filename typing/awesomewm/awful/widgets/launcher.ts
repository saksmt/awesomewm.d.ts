import { Button } from './button';
import { Menu } from '../menu';

export type LauncherModule = (
  this: void,
  args?: Partial<Button> & ({ command: string | string[] } | { menu: Menu }),
) => Button;
