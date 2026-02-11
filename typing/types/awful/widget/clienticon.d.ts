/// <reference path="../client.d.ts" />

/** @noResolution */
declare module 'awful' {
  import { Widget } from 'wibox';

  export namespace widget {
    export interface ClientIcon extends Widget {
      client: Client;
    }

    export const clienticon: (this: void, client: Client) => ClientIcon;
  }
}
