import { HasMouseSignals, TargetedWidget } from './HasMouseSignals';
import { Index, Opacity, PositiveReal } from '../common';
import { Button } from '../../awful';
import { Layout } from './layout';

export interface Widget extends HasMouseSignals, LikeDeclarativeWidget {
  id: string;
  visible: boolean;
  forced_height: PositiveReal;
  forced_width: PositiveReal;
  opacity: Opacity;
  children: Widget[];

  buttons(newButtons?: Button<TargetedWidget>[]): Button<TargetedWidget>[];
  get_children_by_id<T extends Widget>(id: string): T[];
}

export interface LikeDeclarativeWidget {
  setup(args: { [k in string | Index]: Widget | Layout | unknown }): void;
  setup(config: Partial<this> & { layout?: Layout }): void;
}
