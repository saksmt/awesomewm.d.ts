import { PositiveReal, RealNumber } from '../common';

export interface Surface {
  finish(): void;
  flush(): void;
  get_device_offset(): MultiReturn<[RealNumber, RealNumber]>;
  set_device_offset(x: RealNumber, y: RealNumber): void;
  get_width(): PositiveReal;
  get_height(): PositiveReal;
  set_size(width: PositiveReal, height: PositiveReal): void;
  write_to_png(path: string): void;
}
