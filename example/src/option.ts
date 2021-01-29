const sealing: unique symbol = Symbol();

export abstract class Option<T> {
  abstract unwrap(): T | null;
  abstract map<R>(f: (v: T) => R): Option<R>;
  abstract flatMap<R>(f: (v: T) => Option<R>): Option<R>;
  abstract andThen<R>(f: (v: T) => R | null | undefined): Option<R>;

  abstract readonly isEmpty: boolean;
  abstract readonly nonEmpty: boolean;

  readonly forEach: (f: (v: T) => void) => void = (f) => this.map(f);

  abstract orElse<R>(fallback: Option<R>): Option<T | R>;
  abstract getOrElse<R>(fallback: R): T | R;
  abstract fold<R>(ifEmpty: () => R, ifPresent: (v: T) => R): R;

  abstract zip<R>(other: Option<R>): Option<[T, R]>;
  abstract zipMap<R, RR>(other: Option<R>): (f: (self: T, other: R) => RR) => Option<RR>;

  protected constructor(_: typeof sealing) {
    // sealing hierarchy by inaccessible symbol
  }
}

export const option: <T>(value: T | undefined | null) => Option<T> = (v) =>
  v === null || v === undefined ? _none : new Some(v);

class Some<T> extends Option<T> {
  constructor(private readonly value: T) {
    super(sealing);
  }

  readonly isEmpty = false;
  readonly nonEmpty = true;

  unwrap: () => T | null = () => this.value;

  map: <R>(f: (v: T) => R) => Option<R> = (f) => new Some(f(this.value));
  flatMap: <R>(f: (v: T) => Option<R>) => Option<R> = (f) => f(this.value);

  andThen: <R>(f: (v: T) => R | null | undefined) => Option<R> = (f) =>
    this.flatMap((v) => option(f(v)));

  orElse<R>(_: Option<R>): Option<T | R> {
    return this;
  }

  getOrElse<R>(_: R): T | R {
    return this.value;
  }

  fold<R>(_: () => R, ifPresent: (v: T) => R): R {
    return ifPresent(this.value);
  }

  zip<R>(other: Option<R>): Option<[T, R]> {
    return other.map((v) => [this.value, v]);
  }

  zipMap<R, RR>(other: Option<R>): (f: (self: T, other: R) => RR) => Option<RR> {
    return (f: (self: T, other: R) => RR) => other.map((v) => f(this.value, v));
  }
}

class None<T> extends Option<T> {
  constructor() {
    super(sealing);
  }

  readonly isEmpty = true;
  readonly nonEmpty = false;

  unwrap: () => T | null = () => null;
  map: <R>(f: (v: T) => R) => Option<R> = (_) => _none;
  flatMap: <R>(f: (v: T) => Option<R>) => Option<R> = (_) => _none;
  andThen: <R>(f: (v: T) => R | null | undefined) => Option<R> = (_) => _none;

  orElse<R>(fallback: Option<R>): Option<T | R> {
    return fallback;
  }

  getOrElse<R>(fallback: R): T | R {
    return fallback;
  }

  fold<R>(ifEmpty: () => R, _: (v: T) => R): R {
    return ifEmpty();
  }

  zip<R>(_: Option<R>): Option<[T, R]> {
    return _none;
  }

  zipMap<R, RR>(_: Option<R>): (f: (self: T, other: R) => RR) => Option<RR> {
    return (_) => _none;
  }
}

const _none: None<any> = new None<any>(); // eslint-disable-line @typescript-eslint/no-explicit-any
