const _LayoutTypeSymbol: unique symbol = Symbol();
export type Layout = typeof _LayoutTypeSymbol;

export type Layouts = {
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
