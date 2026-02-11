/// <reference path="../common.d.ts" />
/// <reference path="../screen.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { container } from 'wibox';
  import Wibox = container.Wibox;
  import { PatternRef, ShapeRef, FontRef } from 'gears';

  export namespace widget {
    export interface CalendarPopup extends Wibox {
      toggle(): void;

      attach(
        widget: DrawableLike,
        position?: CalendarPopup.Position,
        args?: { on_hover?: boolean },
      ): void;

      call_calendar(
        offset?: IntegralNumber,
        position?: CalendarPopup.Position,
        screen?: ScreenRef,
      ): void;
    }
    export namespace CalendarPopup {
      export const enum Position {
        TopRight = 'tr',
        TopCenter = 'tc',
        TopLeft = 'tl',
        CenterRight = 'cr',
        CenterCenter = 'cc',
        CenterLeft = 'cl',
        BottomRight = 'br',
        BottomCenter = 'bc',
        BottomLeft = 'bl',
      }

      export type CellProperties = {
        markup: string | ((value: string) => string);
        fg_color: PatternRef;
        bg_color: PatternRef;
        shape: ShapeRef;
        border_width: PositiveReal;
        border_color: PatternRef;
        padding: RealNumber;
      };
    }

    export const calendarpopup: {
      month(
        this: void,
        args: Partial<{
          position: CalendarPopup.Position;
          screen: ScreenRef;
          opacity: Opacity;
          bg: PatternRef;
          font: FontRef;
          spacing: PositiveReal;
          margin: RealNumber;
          week_numbers: boolean;
          start_sunday: boolean;
          long_weekdays: boolean;
          style_month: Partial<CalendarPopup.CellProperties>;
          style_header: Partial<CalendarPopup.CellProperties>;
          style_weekday: Partial<CalendarPopup.CellProperties>;
          style_weeknumber: Partial<CalendarPopup.CellProperties>;
          style_normal: Partial<CalendarPopup.CellProperties>;
          style_focus: Partial<CalendarPopup.CellProperties>;
        }>,
      ): CalendarPopup;
      year(
        this: void,
        args: Partial<{
          position: CalendarPopup.Position;
          screen: ScreenRef;
          opacity: Opacity;
          bg: PatternRef;
          font: FontRef;
          spacing: PositiveReal;
          margin: RealNumber;
          week_numbers: boolean;
          start_sunday: boolean;
          long_weekdays: boolean;
          style_year: Partial<CalendarPopup.CellProperties>;
          style_month: Partial<CalendarPopup.CellProperties>;
          style_yearheader: Partial<CalendarPopup.CellProperties>;
          style_header: Partial<CalendarPopup.CellProperties>;
          style_weekday: Partial<CalendarPopup.CellProperties>;
          style_weeknumber: Partial<CalendarPopup.CellProperties>;
          style_normal: Partial<CalendarPopup.CellProperties>;
          style_focus: Partial<CalendarPopup.CellProperties>;
        }>,
      ): CalendarPopup;
    };
  }
}
