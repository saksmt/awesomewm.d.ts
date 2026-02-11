/** @noResolution */
declare module 'awful' {
  import { widget, Layout } from 'wibox';
  import { ThemeRef } from 'beautiful';
  import { Point, Table } from 'gears';

  export const menu: {
    (
      this: void,
      menuDefinition:
        | Menu.Definition
        | Menu.ItemDefinition[]
        | (Menu.Definition & Menu.ItemDefinition[]),
    ): Menu;

    client_list(
      this: void,
      args?: Partial<
        Menu.Definition | Menu.ItemDefinition[] | (Menu.Definition & Menu.ItemDefinition[])
      >,
      itemArgs?: Table,
      filter?: (this: void, client: Client) => boolean,
    ): Menu;
  };

  export interface Menu {
    show(args: { coords?: Point }): void;

    show(): void;

    hide(): void;

    add(item: Menu.ItemDefinition, index: Index): void;

    toggle(args: { coords?: Point }): void;

    delete(entry: number): void;
  }
  export namespace Menu {
    export interface Item {
      label: widget.Textbox;
      sep: widget.Textbox | widget.Image;
      icon: widget.Image;
      widget: Layout;
      cmd: string | ((this: void) => void);
      akey: string;
    }

    export type ItemDefinition =
      | [string, ItemDefinition[] | ((this: void) => void) | string]
      | [string, ItemDefinition[] | ((this: void) => void) | string, string]
      | {
          theme?: Partial<ThemeRef>;
          width?: RealNumber;
          height?: RealNumber;
          text?: string;
          cmd: ItemDefinition[] | ((this: void) => void) | string;
        };

    export type Definition = {
      items: ItemDefinition[];
      theme?: Partial<ThemeRef>;
      auto_expand?: boolean;
      layout?: Layout;
    };
  }
}
