import { Container } from './Container';
import { CompassDirection } from '../../common';

export interface RotateContainer extends Container {
  direction: CompassDirection;
}
