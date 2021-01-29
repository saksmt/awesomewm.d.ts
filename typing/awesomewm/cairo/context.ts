import { Fraction, Index, Opacity, PositiveReal, Radian, RealNumber } from '../common';
import { Path } from './path';
import { Font, FontSlant, FontWeight } from './font';
import { FontOptions } from './fontoptions';
import { Matrix } from './matrix';
import { Pattern } from './pattern';
import { Surface } from './surface';
import { Operator } from 'typescript-to-lua';

export interface CairoContext {
  append_path(path: Path): void;
  arc(
    x: RealNumber,
    y: RealNumber,
    radius: PositiveReal,
    angleStart: Radian,
    angleEnd: Radian,
  ): void;
  arc_negative(
    x: RealNumber,
    y: RealNumber,
    radius: PositiveReal,
    angleStart: Radian,
    angleEnd: Radian,
  ): void;
  clip(): void;
  clip_extends(): MultiReturn<[RealNumber, RealNumber, RealNumber, RealNumber]>;
  clip_preserve(): void;
  close_path(): void;
  copy_path_flat(): Path;
  curve_to(
    firstControlPointX: RealNumber,
    firtsControlPointY: RealNumber,
    secondControlPointX: RealNumber,
    secondControlPointY: RealNumber,
    x: RealNumber,
    y: RealNumber,
  ): void;
  device_to_user(x: number, y: number): MultiReturn<[number, number]>;
  fill(): void;
  fill_extents(): MultiReturn<[RealNumber, RealNumber, RealNumber, RealNumber]>;
  fill_preserve(): void;
  font_extents(): {
    readonly ascent: PositiveReal;
    readonly descent: PositiveReal;
    readonly height: PositiveReal;
    readonly max_x_advance: PositiveReal;
    readonly max_y_advance: PositiveReal;
  };
  get_antialias(): Antialias;
  get_current_point(): MultiReturn<[RealNumber, RealNumber]> | void;
  get_dash(): MultiReturn<[PositiveReal[], PositiveReal]>;
  get_fill_rule(): FillRule;
  get_font_face(): Font;
  get_font_options(): FontOptions;
  get_font_matrix(): Matrix;
  get_line_width(): PositiveReal;
  get_matrix(): Matrix;
  get_miter_limit(): number;
  get_operator(): Operator;
  get_source(): Pattern | Surface;
  get_target(): Surface;
  glyph_extents(
    glyphs: [Index, RealNumber, RealNumber][],
  ): {
    readonly x_bearing: RealNumber;
    readonly y_bearing: RealNumber;
    readonly width: PositiveReal;
    readonly height: PositiveReal;
    readonly x_advance: RealNumber;
    readonly y_advance: RealNumber;
  };
  glyph_path(glyphs: [Index, RealNumber, RealNumber][]): void;
  has_current_point(): boolean;
  identity_matrix(): boolean;
  in_fill(x: RealNumber, y: RealNumber): boolean;
  in_stroke(x: RealNumber, y: RealNumber): boolean;
  line_to(x: RealNumber, y: RealNumber): void;
  mask(pattern: Pattern): void;
  mask(surface: Surface, x: RealNumber, y: RealNumber): void;
  move_to(x: RealNumber, y: RealNumber): void;
  new_path(): void;
  new_sub_path(): void;
  paint(): void;
  paint_with_alpha(opacity: Opacity): void;
  path_extents(): MultiReturn<[RealNumber, RealNumber, RealNumber, RealNumber]>;
  pop_group(): void;
  pop_group_to_source(): void;
  push_group(): void;
  rectangle(x: RealNumber, y: RealNumber, width: PositiveReal, height: PositiveReal): void;
  rel_curve_to(
    firstControlPointX: RealNumber,
    firtsControlPointY: RealNumber,
    secondControlPointX: RealNumber,
    secondControlPointY: RealNumber,
    x: RealNumber,
    y: RealNumber,
  ): void;
  rel_line_to(x: RealNumber, y: RealNumber): void;
  rel_move_to(x: RealNumber, y: RealNumber): void;
  reset_clip(): void;
  restore(): void;
  rotate(angle: Radian): void;
  save(): void;
  scale(scaleX: RealNumber, scaleY: RealNumber): void;
  select_font_face(family: string, slant: FontSlant, weight: FontWeight): void;
  set_antialias(type: Antialias): void;
  set_dash(pattern: PositiveReal[], offset: PositiveReal): void;
  set_fill_rule(rule: FillRule): void;
  set_font_face(font: Font): void;
  set_font_matrix(matrix: Matrix): void;
  set_font_options(options: FontOptions): void;
  set_font_size(size: PositiveReal): void;
  set_line_cap(style: LineCapStyle): void;
  set_line_join(style: LineJoinStyle): void;
  set_line_width(width: PositiveReal): void;
  set_matrix(matrix: Matrix): void;
  set_miter_limit(limit: number): void;
  set_operator(operator: CompositionOperator): void;
  set_source(pattern: Pattern | Surface): void;
  set_source(surface: Surface, x: RealNumber, y: RealNumber): void;
  set_source_rgb(red: Fraction, green: Fraction, blue: Fraction): void;
  set_source_rgba(red: Fraction, green: Fraction, blue: Fraction, opacity: Opacity): void;
  set_tolerance(tolerance: Index): void;
  show_glyphs(glyphs: [Index, RealNumber, RealNumber][]): void;
  show_text(text: string): void;
  stroke(): void;
  stroke_extents(): MultiReturn<[RealNumber, RealNumber, RealNumber, RealNumber]>;
  stroke_preserve(): void;
  text_extents(
    text: string,
  ): {
    readonly x_bearing: RealNumber;
    readonly y_bearing: RealNumber;
    readonly width: PositiveReal;
    readonly height: PositiveReal;
    readonly x_advance: RealNumber;
    readonly y_advance: RealNumber;
  };
  text_path(text: string): void;
  transform(by: Matrix): void;
  translate(x: RealNumber, y: RealNumber): void;
  user_to_device(x: RealNumber, y: RealNumber): MultiReturn<[RealNumber, RealNumber]>;
  user_to_device_distance(x: RealNumber, y: RealNumber): MultiReturn<[RealNumber, RealNumber]>;

  copy_path(): Path;
}

export const enum CompositionOperator {
  Add = 'add',
  Atop = 'atop',
  Clear = 'clear',
  Dest = 'dest',
  In = 'in',
  Out = 'out',
  Over = 'over',
  Saturate = 'saturate',
  Source = 'source',
  Xor = 'xor',
  DestOut = 'dest-out',
  DestOver = 'dest-over',
  DestIn = 'dest-in',
  DestAtop = 'dest-atop',
}

export const enum LineJoinStyle {
  Miter = 'miter',
  Round = 'round',
  Bevel = 'bevel',
}

export const enum LineCapStyle {
  Butt = 'butt',
  Round = 'round',
  Square = 'square',
}

export const enum Antialias {
  Default = 'default',
  None = 'none',
  Gray = 'gray',
  Subpixel = 'subpixel',
}

export const enum FillRule {
  Winding = 'winding',
  EvenOdd = 'event-odd',
}
