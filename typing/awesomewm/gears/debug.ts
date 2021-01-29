export type DebugModule = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  dump(this: void, value: any, tag?: string, depth?: number): void;
  dump_return(this: void, value: any, tag?: string | null, depth?: number): string;
  /* eslint-enable */
};
