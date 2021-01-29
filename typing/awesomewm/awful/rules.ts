import { Placement } from './placement';
import { Tag } from './tag';
import { Client } from './client';
import {
  IntegralNumber,
  NaturalNumber,
  Opacity,
  PositiveIntegral,
  PositiveReal,
  RealNumber,
} from '../common';
import { ShapeRef } from '../gears/shape';
import { SurfaceRef } from '../gears/surface';
import { ScreenRef } from './screen';
import { PatternRef } from '../gears/color';
import { Surface } from '../cairo/surface';
import { Key } from './key';
import { Button } from './button';

export type RuleProperties = Partial<{
  keys: Key<Client>[];
  buttons: Button<Client>[];
  placement: Placement | number;
  honor_padding: boolean;
  honor_workarea: boolean;
  tag: Tag;
  tags: Tag[];
  new_tag: Partial<Tag> | boolean;
  switch_to_tags: boolean;
  focus: boolean | ((c: Client) => Client | null);
  raise: boolean;
  titlebars_enabled: boolean;
  callback: (this: void, client: Client) => void;
  marked: boolean;
  is_fixed: boolean;
  immobilized_vertical: boolean;
  immobilized_horizontal: boolean;
  floating: boolean;
  x: RealNumber;
  y: RealNumber;
  width: PositiveReal;
  height: PositiveReal;
  dockable: boolean;
  requests_no_titlebar: boolean;
  shape: ShapeRef;
  window: string;
  name: string;
  skip_taskbar: boolean;
  type: string;
  class: string;
  instance: string;
  pid: NaturalNumber;
  role: string;
  machine: string;
  icon_name: string;
  icon: SurfaceRef;
  icon_sizes: { width: PositiveReal; height: PositiveReal }[];
  screen: ScreenRef | ((c: Client) => ScreenRef);
  hidden: boolean;
  minimized: boolean;
  border_width: PositiveReal;
  border_color: PatternRef;
  urgent: boolean;
  content: Surface;
  opacity: Opacity;
  ontop: boolean;
  above: boolean;
  below: boolean;
  fullscreen: boolean;
  maximized: boolean;
  maximized_horizontal: boolean;
  maximized_vertical: boolean;
  transient_for: Client;
  group_window: Client;
  leader_window: Client;
  size_hints: Partial<{
    user_position: IntegralNumber;
    user_size: IntegralNumber;
    program_position: IntegralNumber;
    program_size: IntegralNumber;
    max_width: PositiveIntegral;
    max_height: PositiveIntegral;
    min_width: PositiveIntegral;
    min_height: PositiveIntegral;
    width_inc: IntegralNumber;
    height_inc: IntegralNumber;
  }>;
  sticky: boolean;
  modal: boolean;
  focusable: boolean;
  shape_bounding: ShapeRef;
  client_shape_bounding: ShapeRef;
  shape_clip: ShapeRef;
  client_shape_clip: ShapeRef;
  shape_input: ShapeRef;
  valid: boolean;
  first_tag: Tag;
  startup_id: string;
}>;

export type RuleAnyMatchers = Partial<{
  tag: Tag[];
  tags: Tag[][];
  window: string[];
  name: string[];
  type: string[];
  class: string[];
  instance: string[];
  pid: NaturalNumber[];
  role: string[];
  machine: string[];
  icon_name: string[];
  screen: ScreenRef[];
  startup_id: string[];
}>;

type Except = { except: RuleProperties } | { except_any: RuleAnyMatchers };
type SimpleRule = { rule: RuleProperties; properties: RuleProperties };
type RuleAny = { rule_any: RuleAnyMatchers; properties: RuleProperties };
export type Rule = SimpleRule | (SimpleRule & Except) | RuleAny | (RuleAny & Except);
