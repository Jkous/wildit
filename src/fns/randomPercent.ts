type RandomizerFn<K extends string, F> = {
  key: K
  build: (rng: () => number) => F
}

export const randomPercent = {
  key: 'randomPercent',
  build: (rng: () => number) => () => Math.floor(rng() * (100 - 1 + 1)) + 1
} as RandomizerFn<'randomPercent', () => number>
