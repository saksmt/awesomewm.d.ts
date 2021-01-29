import { BaseVariables } from './base';
import { CalendarVariables } from './calendar';
import { ClientVariables } from './client';
import { HotkeysVariables } from './hotkeys';
import { LayoutVariables } from './layout';
import { LayoutlistVariables } from './layoutlist';
import { MenuVariables } from './menu';
import { NotificationVariables } from './notification';
import { PromptVariables } from './prompt';
import { SnapVariables } from './snap';
import { TaglistVariables } from './taglist';
import { TasklistVariables } from './tasklist';
import { TitlebarVariables } from './titlebar';
import { TooltipVariables } from './tooltip';
import { WibarVariables } from './wibar';
import { WidgetVariables } from './widgets';

export type ThemeVariables = BaseVariables &
  CalendarVariables &
  ClientVariables &
  HotkeysVariables &
  LayoutVariables &
  LayoutlistVariables &
  MenuVariables &
  NotificationVariables &
  PromptVariables &
  SnapVariables &
  TaglistVariables &
  TasklistVariables &
  TitlebarVariables &
  TooltipVariables &
  WibarVariables &
  WidgetVariables;
