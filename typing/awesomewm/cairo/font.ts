export interface Font {
  get_family(): string | never;
  get_slant(): FontSlant | never;
  get_weight(): FontWeight | never;
  get_type(): FontType;
}

export const enum FontType {
  Toy = 'toy',
  FreeType = 'ft',
  Windows = 'win32',
  MacOS = 'quartz',
  User = 'user',
}

export const enum FontSlant {
  Normal = 'normal',
  Italic = 'italic',
  Oblique = 'oblique',
}

export const enum FontWeight {
  Normal = 'normal',
  Bold = 'bold',
}
