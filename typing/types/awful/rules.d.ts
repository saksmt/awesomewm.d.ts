/// <reference path="./placement.d.ts" />
/// <reference path="./tag.d.ts" />
/// <reference path="./client.d.ts" />
/// <reference path="./screen.d.ts" />
/// <reference path="./button.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { ShapeRef, SurfaceRef, PatternRef } from 'gears';
  import { Surface } from 'oocairo';

  // todo: check if it is actually readonly
  export const rules: {
    rules: Rule[];
  };

  export type Rule =
    | Rule.Simple
    | (Rule.Simple & Rule.Except)
    | Rule.Any
    | (Rule.Any & Rule.Except);
  export namespace Rule {
    export type Except =
      | { except: MatchingProperties }
      | { except_any: MatchingAnyValueOfProperties };
    export type Simple = { rule: MatchingProperties; properties: MatchingProperties };
    export type Any = { rule_any: MatchingAnyValueOfProperties; properties: MatchingProperties };

    export type MatchingAnyValueOfProperties = Partial<{
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

    export type MatchingProperties = Partial<{
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
  }
}
