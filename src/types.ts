export type RandomizerFn<K extends string, F> = {
  key: K
  build: (rng: () => number) => F
}
