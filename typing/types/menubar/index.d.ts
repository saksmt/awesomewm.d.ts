/** @noResolution */
declare module 'menubar' {
  import { ScreenRef } from 'awful';
  import { Geometry } from 'gears';

  export function refresh(this: void, screen?: ScreenRef): void;

  export function show(this: void, screen?: ScreenRef): void;

  export function hide(this: void): void;

  export let geometry: Geometry;
  export let cache_entries: boolean;
  export let show_categories: boolean;
  export let right_margin: RealNumber;
  export let right_label: string;
  export let left_label: string;

  export const utils: {
    terminal: string;
    wmname: string;
  };
}
