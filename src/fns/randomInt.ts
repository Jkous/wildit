import type { RandomizerFn } from '../types'

export const randomInt = {
  key: 'randomInt',
  build: (rng: () => number) => (min: number, max: number) =>
    Math.floor(rng() * (max - min + 1)) + min
} as RandomizerFn<'randomInt', (min: number, max: number) => number>
