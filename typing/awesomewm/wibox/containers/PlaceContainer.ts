import { Container } from './Container';
import { AlignX, AlignY } from '../../common';

export interface PlaceContainer extends Container {
  halign: AlignX;
  valign: AlignY;
  fill_vertical: boolean;
  fill_horizontal: boolean;
  content_fill_vertical: boolean;
  content_fill_horizontal: boolean;
}
