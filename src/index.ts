import { next } from './randomizer'

export type RandomizerFn<K extends string, F> = {
  key: K
  build: (rng: () => number) => F
}

// function getRandomSeed() {
//   return Date.now() * Math.random()
// }

export default function makeRandomizer<
  T extends readonly RandomizerFn<string, unknown>[]
>(
  seed: number,
  fns: T
): {
  [K in T[number] as K['key']]: K extends RandomizerFn<string, infer F>
    ? F
    : never
} {
  const rng = next(seed)
  return Object.fromEntries(fns.map((fn) => [fn.key, fn.build(rng)])) as {
    [K in T[number] as K['key']]: K extends RandomizerFn<string, infer F>
      ? F
      : never
  }
}

// export function createRandomizer(
//   seed?: number
// ): ReturnType<typeof addRandomizer>
// export function createRandomizer(
//   key: string,
//   seed?: number
// ): ReturnType<typeof addRandomizer>
// export function createRandomizer(
//   arg1?: string | number,
//   arg2?: number
// ): ReturnType<typeof addRandomizer> {
//   if (typeof arg1 === 'number' || arg1 === undefined) {
//     return addRandomizer('wildit', arg1 ?? getRandomSeed())
//   }

//   const parsedKey = arg1.trim()
//   if (parsedKey === 'wildit') {
//     throw new SeedError(
//       'The key "wildit" is reserved and cannot be used.',
//       parsedKey
//     )
//   }

//   const seed = arg2 ?? getRandomSeed()
//   return addRandomizer(parsedKey, seed)
// }

// Re-exports of functions
export { randomInt } from './fns/randomInt'
export { randomPercent } from './fns/randomPercent'
