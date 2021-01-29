import { Layout, Widget } from 'wibox';
import { Index } from 'awesomewm.4.3.ts.d';
import { table } from 'gears';

export function widgetData<
  T extends Widget,
  D extends Partial<Omit<T, 'children'>> & { children?: R[] },
  R
>(data: D): { [k in string | Index]: unknown } & D {
  if (data.children) {
    const children = data.children;
    data.children = undefined;
    return table.join(children, data);
  } else {
    return data;
  }
}
export function setupWidget<T extends Widget, R>(
  widget: T,
): (data: Partial<Omit<T, 'children'>> & { layout?: Layout; children?: R[] }) => T {
  return (data) => {
    widget.setup(widgetData(data));
    return widget;
  };
}

export function mkWidget<
  T extends Widget,
  D extends Partial<Omit<T, 'children'>> &
    ({ children?: R[]; widget: T } | { children?: R[]; layout: Layout }),
  R
>(data: D): { [k in string | Index]: unknown } & D {
  return widgetData(data);
}
