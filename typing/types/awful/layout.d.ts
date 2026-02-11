declare const _LayoutTypeSymbol: unique symbol;

/** @noResolution */
declare module 'awful' {
  export const layout: {
    layouts: Layout[];
    suit: Layouts;
    inc(this: void, amount: IntegralNumber): void;
  };

  export namespace Layout {
    export const enum MasterFillPolicy {
      Expand = 'expand',
      MasterWidthFactor = 'master_width_factor',
    }
  }
  export type Layout = typeof _LayoutTypeSymbol;

  type Layouts = {
    readonly corner: {
      readonly nw: Layout;
      readonly ne: Layout;
      readonly sw: Layout;
      readonly se: Layout;
    };
    readonly magnifier: Layout;
    readonly max: Layout & {
      readonly fullscreen: Layout;
    };
    readonly spiral: {
      readonly dwindle: Layout;
    } & Layout;
    readonly tile: {
      readonly left: Layout;
      readonly right: Layout;
      readonly bottom: Layout;
      readonly top: Layout;
    } & Layout;
    readonly fair: Layout & { readonly horizontal: Layout };
    readonly floating: Layout;
  };
}
