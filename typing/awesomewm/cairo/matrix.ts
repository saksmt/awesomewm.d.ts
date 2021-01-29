import { Radian, RealNumber } from '../common';

export interface Matrix {
  invert(): void;
  multiply(other: Matrix): void;
  rotate(angle: Radian): void;
  scale(scaleX: RealNumber, scaleY: RealNumber): void;
  transform_distance(x: RealNumber, y: RealNumber): MultiReturn<[RealNumber, RealNumber]>;
  transform_point(x: RealNumber, y: RealNumber): MultiReturn<[RealNumber, RealNumber]>;
  translate(x: RealNumber, y: RealNumber): void;
}
