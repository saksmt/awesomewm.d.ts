import { CairoContext } from '../cairo/context';
import { Fraction, PositiveReal, Radian } from '../common';

export type ShapeFunction = (
  this: void,
  shape: CairoContext,
  width: PositiveReal,
  height: PositiveReal,
) => void;

export type ShapeRef = ShapeFunction | CairoContext;

export type ShapeModule = {
  transform(this: void, shape: ShapeFunction): ShapeFunction & CairoContext;
  rounded_rect: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    radius?: PositiveReal,
  ) => void;
  rounded_bar: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
  ) => void;
  partially_rounded_rect: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    topLeft?: boolean,
    topRight?: boolean,
    bottomRight?: boolean,
    bottomLeft?: boolean,
    radius?: PositiveReal,
  ) => void;
  infobubble: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    cornerRadius?: PositiveReal,
    arrowSize?: PositiveReal,
    arrowPosition?: PositiveReal,
  ) => void;
  rectangular_tag: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    arrowLength?: PositiveReal,
  ) => void;
  arrow: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    headWidth?: PositiveReal,
    shaftWidth?: PositiveReal,
    shaftLength?: PositiveReal,
  ) => void;
  hexagon: (this: void, context: CairoContext, width: PositiveReal, height: PositiveReal) => void;
  powerline: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    arrowDepth?: PositiveReal,
  ) => void;
  isosceles_triangle: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
  ) => void;
  cross: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    thickness?: PositiveReal,
  ) => void;
  octogon: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    cornerRadius?: PositiveReal,
  ) => void;
  circle: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    radius?: PositiveReal,
  ) => void;
  rectangle: (this: void, context: CairoContext, width: PositiveReal, height: PositiveReal) => void;
  parallelogram: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    baseWidth?: PositiveReal,
  ) => void;
  losange: (this: void, context: CairoContext, width: PositiveReal, height: PositiveReal) => void;
  pie: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    startAngle?: Radian,
    endAngle?: Radian,
    radius?: PositiveReal,
  ) => void;
  arc: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    thickness?: PositiveReal,
    startAngle?: Radian,
    endAngle?: Radian,
    startRounded?: boolean,
    endRounded?: boolean,
  ) => void;
  radial_progress: (
    this: void,
    context: CairoContext,
    width: PositiveReal,
    height: PositiveReal,
    percent: Fraction,
    hideLeft?: boolean,
  ) => void;
};
