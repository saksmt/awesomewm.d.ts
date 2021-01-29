import { Container } from './Container';
import { PositiveReal } from '../../common';

export interface ConstraintContainer extends Container {
  strategy: ConstraintStrategy;
  height: PositiveReal;
  width: PositiveReal;
}

export const enum ConstraintStrategy {
  Min = 'min',
  Max = 'max',
  Exact = 'exact',
}
