/** @noResolution */
declare module 'oocairo' {
  export interface Matrix {
    invert(): void;

    multiply(other: Matrix): void;

    rotate(angle: Radian): void;

    scale(scaleX: RealNumber, scaleY: RealNumber): void;

    transform_distance(x: RealNumber, y: RealNumber): LuaMultiReturn<[RealNumber, RealNumber]>;

    transform_point(x: RealNumber, y: RealNumber): LuaMultiReturn<[RealNumber, RealNumber]>;

    translate(x: RealNumber, y: RealNumber): void;
  }
}
