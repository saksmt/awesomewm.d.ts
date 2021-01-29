import { Fraction, RealNumber } from '../common';
import { Matrix } from './matrix';
import { Surface } from './surface';

export interface Pattern {
  add_color_stop_rgb(offset: Fraction, r: Fraction, g: Fraction, b: Fraction): void;
  add_color_stop_rgba(offset: Fraction, r: Fraction, g: Fraction, b: Fraction): void;
  get_color_stops(): [Fraction, Fraction, Fraction, Fraction, Fraction][];

  set_matrix(matrix: Matrix): void;
  get_matrix(): Matrix;
  get_type(): PatternType;
  get_extend(): PatternExtendType;
  set_extend(type: PatternExtendType): void;
  get_filter(): PatternFilterType;
  set_filter(type: PatternFilterType): void;

  get_surface(): Surface | never;
  get_linear_points(): MultiReturn<[RealNumber, RealNumber, RealNumber, RealNumber]> | never;
  get_radial_circles(): MultiReturn<[RealNumber, RealNumber, RealNumber, RealNumber]> | never;
  get_rgba(): MultiReturn<[Fraction, Fraction, Fraction, Fraction]> | never;
}

export const enum PatternType {
  Linear = 'linear',
  Solid = 'solid',
  Radial = 'radial',
  Surface = 'surface',
}

export const enum PatternExtendType {
  None = 'none',
  Repeat = 'repeat',
  Reflect = 'reflect',
  Pad = 'pad',
}

export const enum PatternFilterType {
  Fast = 'fast',
  Good = 'good',
  Best = 'best',
  Nearest = 'nearest',
  Bilinear = 'bilinear',
}
