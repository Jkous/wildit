import type { RandomizerFn } from '../index'

/**
 * Generates a random integer between min and max (inclusive)
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns A random integer between min and max
 */
export function createRandomInt(rng: () => number) {
  return function randomInt(min: number, max: number): number {
    return Math.floor(rng() * (max - min + 1)) + min
  }
}

export const randomInt = {
  key: 'randomInt',
  build: createRandomInt
} as const satisfies RandomizerFn<
  'randomInt',
  ReturnType<typeof createRandomInt>
>
