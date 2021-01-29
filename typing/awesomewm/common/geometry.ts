import { PositiveReal, RealNumber } from './types';

export type Point = {
  x: RealNumber;
  y: RealNumber;
};

export type Margins = {
  top: RealNumber;
  bottom: RealNumber;
  left: RealNumber;
  right: RealNumber;
};

export type Geometry = {
  x: RealNumber;
  y: RealNumber;
  width: PositiveReal;
  height: PositiveReal;
};
