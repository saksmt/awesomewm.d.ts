/// <reference path="./widget.d.ts" />
/// <reference path="./layout.d.ts" />
/// <reference path="./container/index.d.ts" />"
/// <reference path="./widgets/index.d.ts" />"

/** @noResolution */
declare module 'wibox' {
  export type WidgetTemplate<T extends Widget> = { widget: T } & Partial<Omit<T, 'children'>> & {
      layout?: Layout;
    };
}
