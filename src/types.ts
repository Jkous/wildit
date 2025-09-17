// types.ts
export type RandomizerFunction<
  TName extends string,
  TFn extends (...args: any[]) => any
> = {
  key: TName
  build: (rng: () => number) => TFn
}
