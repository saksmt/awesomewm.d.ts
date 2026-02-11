/// <reference path="./key.d.ts" />
/// <reference path="./button.d.ts" />
/// <reference path="./keygrabber.d.ts" />
/// <reference path="./layout.d.ts" />
/// <reference path="./client.d.ts" />
/// <reference path="./screen.d.ts" />
/// <reference path="./common.d.ts" />
/// <reference path="./tag.d.ts" />
/// <reference path="./mouse.d.ts" />
/// <reference path="./placement.d.ts" />
/// <reference path="./rules.d.ts" />
/// <reference path="./spawn.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./prompt.d.ts" />
/// <reference path="./widget/index.d.ts" />
/// <reference path="./hotkeys_popup/index.d.ts" />

/** @noResolution */
declare module 'awful' {
  export const util: {
    eval(code: string): unknown;
  };
}
