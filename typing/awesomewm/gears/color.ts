import { Pattern } from '../cairo/pattern';
import { Surface } from '../cairo/surface';
import { SurfaceRef } from './surface';
import { Fraction, RealNumber } from '../common';

export type Gradient = {
  from: [RealNumber, RealNumber];
  to: [RealNumber, RealNumber];
  stops: [Fraction, string][];
};

export type RadialGradient = {
  from: [RealNumber, RealNumber, RealNumber];
  to: [RealNumber, RealNumber, RealNumber];
  stops: [Fraction, string][];
};

export type PatternRef =
  | string
  | { type: 'solid'; color: string }
  | { type: 'png'; file: string }
  | ({ type: 'linear' } & Gradient)
  | ({ type: 'radial' } & RadialGradient)
  | Pattern;

export type ColorModule = {
  (this: void, color: string): Pattern;
  parse_color(this: void, color: string): Pattern;
  create_solid_pattern(this: void, color: string | { color: string }): Pattern;
  create_png_pattern(this: void, file: string | { file: string }): Pattern;
  create_linear_pattern(this: void, pattern: string | Gradient): Pattern;
  create_radial_pattern(this: void, pattern: string | Gradient): Pattern;
  create_pattern_uncached(this: void, pattern: PatternRef): Pattern;
  create_pattern(this: void, pattern: PatternRef): Pattern;
  create_opaque_pattern(this: void, pattern: PatternRef): Pattern | null;
  recolor_image(this: void, image: SurfaceRef, pattern: PatternRef): Surface;
  transparent: Pattern;
};
