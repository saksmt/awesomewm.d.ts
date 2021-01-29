import { TextboxWidget } from '../wibox/widgets/TextboxWidget';
import { ImageWidget } from '../wibox/widgets/ImageWidget';
import { Layout } from '../wibox/layout';
import { ThemeRef } from '../../beautiful';
import { Index, Point, RealNumber } from '../common';

export interface MenuItem {
  label: TextboxWidget;
  sep: TextboxWidget | ImageWidget;
  icon: ImageWidget;
  widget: Layout;
  cmd: string | ((this: void) => void);
  akey: string;
}

export interface Menu {
  show(args: { coords?: Point }): void;
  show(): void;
  hide(): void;
  add(item: MenuItemDefinition, index: Index): void;
  toggle(args: { coords?: Point }): void;
  delete(entry: number): void;
}

export type MenuItemDefinition =
  | [string, MenuItemDefinition[] | ((this: void) => void) | string]
  | [string, MenuItemDefinition[] | ((this: void) => void) | string, string]
  | {
      theme?: Partial<ThemeRef>;
      width?: RealNumber;
      height?: RealNumber;
      text?: string;
      cmd: MenuItemDefinition[] | ((this: void) => void) | string;
    };

export type MenuDefinition = {
  items: MenuItemDefinition[];
  theme?: Partial<ThemeRef>;
  auto_expand?: boolean;
  layout?: Layout;
};
