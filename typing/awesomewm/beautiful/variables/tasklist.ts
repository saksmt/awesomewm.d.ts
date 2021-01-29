import { PatternRef } from '../../gears/color';
import { SurfaceRef } from '../../gears/surface';
import { FontRef } from '../../pango/font';
import { ShapeRef } from '../../gears/shape';
import { PositiveReal, AlignX } from '../../common';

export type TasklistVariables = {
  tasklist_fg_normal: PatternRef;
  tasklist_bg_normal: PatternRef;
  tasklist_bg_image_normal: SurfaceRef;
  tasklist_shape: ShapeRef;
  tasklist_shape_border_width: PositiveReal;
  tasklist_shape_border_color: PatternRef;

  tasklist_fg_focus: PatternRef;
  tasklist_bg_focus: PatternRef;
  tasklist_bg_image_focus: SurfaceRef;
  tasklist_font_focus: FontRef;
  tasklist_shape_focus: ShapeRef;
  tasklist_shape_border_width_focus: PositiveReal;
  tasklist_shape_border_color_focus: PatternRef;

  tasklist_fg_urgent: PatternRef;
  tasklist_bg_urgent: PatternRef;
  tasklist_bg_image_urgent: SurfaceRef;
  tasklist_font_urgent: FontRef;
  tasklist_shape_urgent: ShapeRef;
  tasklist_shape_border_width_urgent: PositiveReal;
  tasklist_shape_border_color_urgent: PatternRef;

  tasklist_fg_minimized: PatternRef;
  tasklist_bg_minimized: PatternRef;
  tasklist_bg_image_minimized: SurfaceRef;
  tasklist_font_minimized: FontRef;
  tasklist_shape_minimized: ShapeRef;
  tasklist_shape_border_width_minimized: PositiveReal;
  tasklist_shape_border_color_minimized: PatternRef;

  tasklist_disable_icon: boolean;
  tasklist_disable_task_name: boolean;
  tasklist_plain_task_name: boolean;
  tasklist_spacing: PositiveReal;
  tasklist_align: AlignX;
  tasklist_font: FontRef;
};
