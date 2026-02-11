/// <reference path="../widget.d.ts" />

/** @noResolution */
declare module 'wibox' {
  export namespace widget {
    export interface TextClock extends Widget {
      format: string;
      timezone: string;
      refresh: PositiveReal;

      force_update(): void;
    }

    export const textclock: Widget.Constructor<
      (this: void, format?: string, refresh?: number, timezone?: string) => TextClock
    >;
  }
}
