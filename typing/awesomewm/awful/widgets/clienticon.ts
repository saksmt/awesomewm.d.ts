import { Widget } from '../../wibox/Widget';
import { Client } from '../client';

export interface ClientIcon extends Widget {
  client: Client;
}

export type ClientIconModule = (this: void, client: Client) => ClientIcon;
