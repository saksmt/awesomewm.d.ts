declare const pathType: unique symbol;
/** @noResolution */
declare module 'oocairo' {
  export type Path = typeof pathType;
}
