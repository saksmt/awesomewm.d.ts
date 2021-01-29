import { FontRef } from '../../pango/font';
import { PatternRef } from '../../gears/color';
import { Opacity, PositiveReal } from '../../common';
import { ShapeRef } from '../../gears/shape';

export type NotificationVariables = {
  notification_font: FontRef;
  notification_bg: PatternRef;
  notification_fg: PatternRef;
  notification_border_width: PositiveReal;
  notification_border_color: PatternRef;
  notification_shape: ShapeRef;
  notification_opacity: Opacity;
  notification_margin: PositiveReal;
  notification_width: PositiveReal;
  notification_height: PositiveReal;
  notification_max_width: PositiveReal;
  notification_max_height: PositiveReal;
  notification_icon_size: PositiveReal;
};
