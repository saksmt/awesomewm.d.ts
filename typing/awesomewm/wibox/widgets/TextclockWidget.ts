import { Widget } from '../Widget';
import { PositiveReal } from '../../common';

export interface TextclockWidget extends Widget {
  format: string;
  timezone: string;
  refresh: PositiveReal;
  force_update(): void;
}
