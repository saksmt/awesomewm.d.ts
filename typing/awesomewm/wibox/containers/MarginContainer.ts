import { Container } from './Container';
import { RealNumber } from '../../common';
import { PatternRef } from '../../gears/color';

export interface MarginContainer extends Container {
  margins: RealNumber;
  color: PatternRef;
  left: RealNumber;
  right: RealNumber;
  top: RealNumber;
  bottom: RealNumber;
}
