const fontSym: unique symbol = Symbol();
export type Font = typeof fontSym;
export type FontRef = string | Font;
