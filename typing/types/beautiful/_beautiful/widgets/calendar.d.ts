/** @noResolution */
declare module '_beautiful' {
  import { FontRef } from 'gears';
  import { widget } from 'awful';

  export type CalendarVariables = {
    calendar_style: widget.CalendarPopup.CellProperties;
    calendar_font: FontRef;
    calendar_spacing: PositiveReal;
    calendar_week_numbers: boolean;
    calendar_start_sunday: boolean;
    calendar_long_weekdays: boolean;
  };
}
