import { ScreenRef } from '../screen';
import { Widget } from '../../wibox/Widget';

export type LayoutBoxModule = (this: void, screen?: ScreenRef) => Widget;
