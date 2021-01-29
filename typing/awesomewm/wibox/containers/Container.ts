import { Widget } from '../Widget';

export interface Container extends Widget {
  widget: Widget;
}
