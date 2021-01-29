import { ScreenRef } from './awful';
import { Geometry, RealNumber } from './awesomewm/common';

declare function refresh(this: void, screen?: ScreenRef): void;
declare function show(this: void, screen?: ScreenRef): void;
declare function hide(this: void): void;

declare let geometry: Geometry;
declare let cache_entries: boolean;
declare let show_categories: boolean;
declare let right_margin: RealNumber;
declare let right_label: string;
declare let left_label: string;

declare const utils: {
  terminal: string;
  wmname: string;
};
