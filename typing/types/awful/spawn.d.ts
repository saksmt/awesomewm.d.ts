/// <reference path="./rules.d.ts" />
/// <reference path="./client.d.ts" />

/** @noResolution */
declare module 'awful' {
  export type Pid = NaturalNumber;

  export const spawn: {
    (
      this: void,
      command: string | string[],
      rules?: Rule.MatchingProperties,
      callback?: () => void,
    ): LuaMultiReturn<[Pid, string]> | string;

    spawn(
      this: void,
      command: string | string[],
      rules?: Rule.MatchingProperties,
      callback?: () => void,
    ): LuaMultiReturn<[Pid, string]> | string;
    with_shell(this: void, command: string): void;
    with_line_callback(
      this: void,
      command: string | string[],
      callbacks: {
        stdout?: (this: void, line: string) => void;
        stderr?: (this: void, line: string) => void;
        output_done?: (this: void) => void;
        exit?: (reason: 'exit' | 'signal', codeOrSignal: NaturalNumber) => void;
      },
    ): Pid | string;
    easy_async(
      this: void,
      command: string | string[],
      callback: (
        this: void,
        args: {
          stdout: string;
          stderr: string;
          exitreason: 'exit' | 'signal';
          exitcode: NaturalNumber;
        },
      ) => void,
    ): Pid | string;
    easy_async_with_shell(
      this: void,
      command: string,
      callback: (
        this: void,
        args: {
          stdout: string;
          stderr: string;
          exitreason: 'exit' | 'signal';
          exitcode: NaturalNumber;
        },
      ) => void,
    ): Pid | string;
    once(
      this: void,
      command: string | string[],
      rules: Rule.MatchingProperties,
      matcher?: (this: void, client: Client) => boolean,
      uniqueId?: string,
      callback?: (this: void) => void,
    ): void;
    single_instance(
      this: void,
      command: string | string[],
      rules: Rule.MatchingProperties,
      matcher?: (this: void, client: Client) => boolean,
      uniqueId?: string,
      callback?: (this: void) => void,
    ): void;
    raise_or_spawn(
      this: void,
      command: string | string[],
      rules: Rule.MatchingProperties,
      matcher?: (this: void, client: Client) => boolean,
      uniqueId?: string,
      callback?: (this: void) => void,
    ): void;
  };
}
