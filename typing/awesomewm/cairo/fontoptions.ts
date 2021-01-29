export interface FontOptions {
  copy(): FontOptions;
  hash(): number;
  merge(other: FontOptions): void;
  set_hint_metrics(metrics: HintMetrics): void;
  get_hint_metrics(): HintMetrics;
  set_hint_style(style: HintStyle): void;
  get_hint_style(): HintStyle;
  set_subpixel_order(order: SubpixelOrder): void;
  get_subpixel_order(): SubpixelOrder;
}

export const enum SubpixelOrder {
  Default = 'default',
  RGB = 'rgb',
  BGR = 'bgr',
  VRGB = 'vrgb',
  VBGR = 'vbgr',
}

export const enum HintStyle {
  Default = 'default',
  None = 'none',
  Slight = 'slight',
  Medium = 'medium',
  Full = 'full',
}

export const enum HintMetrics {
  Default = 'default',
  On = 'on',
  Off = 'off',
}
