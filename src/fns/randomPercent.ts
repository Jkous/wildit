import type { RandomizerFn } from '../types'

/**
 * Generates a random percentage between 1 and 100 (inclusive)
 * @returns A random number between 1 and 100
 */
export function createRandomPercent(rng: () => number) {
  return function randomPercent(): number {
    return Math.floor(rng() * (100 - 1 + 1)) + 1
  }
}

export const randomPercent = {
  key: 'randomPercent',
  build: createRandomPercent
} as const satisfies RandomizerFn<
  'randomPercent',
  ReturnType<typeof createRandomPercent>
>
