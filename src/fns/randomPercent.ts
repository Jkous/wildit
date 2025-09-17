export const randomPercent = {
  key: 'randomPercent',
  build: (rng: () => number) => () => Math.floor(rng() * (100 - 1 + 1)) + 1
}
