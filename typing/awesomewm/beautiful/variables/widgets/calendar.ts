import { FontRef } from '../../../pango/font';
import { PositiveReal } from '../../../common';

export type CalendarVariables = {
  calendar_font: FontRef;
  calendar_spacing: PositiveReal;
  calendar_week_numbers: boolean;
  calendar_start_sunday: boolean;
  calendar_long_weekdays: boolean;
};
