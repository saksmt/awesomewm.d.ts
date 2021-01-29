import { Container } from '../../wibox/containers/Container';
import { ScreenRef } from '../screen';
import { Widget } from '../../wibox/Widget';

export interface OnlyOnScreen extends Container {
  screen: ScreenRef;
}

export type OnlyOnScreenModule = (this: void, widget?: Widget, screen?: ScreenRef) => OnlyOnScreen;
