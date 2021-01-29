import { Wibox } from '../../wibox/containers/Wibox';
import { DrawableLike } from '../common';
import { IntegralNumber, Opacity, PositiveReal, RealNumber } from '../../common';
import { ScreenRef } from '../screen';
import { PatternRef } from '../../gears/color';
import { ShapeRef } from '../../gears/shape';
import { FontRef } from '../../pango/font';

export interface CalendarPopup extends Wibox {
  toggle(): void;
  attach(widget: DrawableLike, position?: CalendarPosition, args?: { on_hover?: boolean }): void;
  call_calendar(offset?: IntegralNumber, position?: CalendarPosition, screen?: ScreenRef): void;
}

export const enum CalendarPosition {
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

export type CalendarCellProperties = {
  markup: string | ((value: string) => string);
  fg_color: PatternRef;
  bg_color: PatternRef;
  shape: ShapeRef;
  border_width: PositiveReal;
  border_color: PatternRef;
  padding: RealNumber;
};

export type CalendarPopupModule = {
  month(
    this: void,
    args: Partial<{
      position: CalendarPosition;
      screen: ScreenRef;
      opacity: Opacity;
      bg: PatternRef;
      font: FontRef;
      spacing: PositiveReal;
      margin: RealNumber;
      week_numbers: boolean;
      start_sunday: boolean;
      long_weekdays: boolean;
      style_month: Partial<CalendarCellProperties>;
      style_header: Partial<CalendarCellProperties>;
      style_weekday: Partial<CalendarCellProperties>;
      style_weeknumber: Partial<CalendarCellProperties>;
      style_normal: Partial<CalendarCellProperties>;
      style_focus: Partial<CalendarCellProperties>;
    }>,
  ): CalendarPopup;
  year(
    this: void,
    args: Partial<{
      position: CalendarPosition;
      screen: ScreenRef;
      opacity: Opacity;
      bg: PatternRef;
      font: FontRef;
      spacing: PositiveReal;
      margin: RealNumber;
      week_numbers: boolean;
      start_sunday: boolean;
      long_weekdays: boolean;
      style_year: Partial<CalendarCellProperties>;
      style_month: Partial<CalendarCellProperties>;
      style_yearheader: Partial<CalendarCellProperties>;
      style_header: Partial<CalendarCellProperties>;
      style_weekday: Partial<CalendarCellProperties>;
      style_weeknumber: Partial<CalendarCellProperties>;
      style_normal: Partial<CalendarCellProperties>;
      style_focus: Partial<CalendarCellProperties>;
    }>,
  ): CalendarPopup;
};
