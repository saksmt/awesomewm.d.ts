/** @noResolution */
declare module 'gears' {
  export const filesystem: {
    make_directories(
      this: void,
      path: string,
    ): LuaMultiReturn<[true, null]> | LuaMultiReturn<[false, string]>;
    make_parent_directories(
      this: void,
      path: string,
    ): LuaMultiReturn<[true, null]> | LuaMultiReturn<[false, string]>;
    file_readable(this: void, path: string): boolean;
    dir_readable(this: void, path: string): boolean;
    is_dir(this: void, path: string): boolean;
    get_xdg_config_home(this: void): string;
    get_xdg_cache_home(this: void): string;
    get_xdg_data_home(this: void): string;
    get_xdg_data_dirs(this: void): string;
    get_configuration_dir(this: void): string;
    get_themes_dir(this: void): string;
    get_cache_dir(this: void): string;
    get_awesome_icon_dir(this: void): string;
    get_dir(this: void, path: string): string;
  };
}
