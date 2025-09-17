import { next } from './randomizer'

export type RandomizerFn<K extends string, F> = {
  readonly key: K
  readonly build: (rng: () => number) => F
}

// Re-export the function creators for better Go to Definition support
export { createRandomInt } from './fns/randomInt'
export { createRandomPercent } from './fns/randomPercent'

// Helper type that preserves the original function references
type ExtractFunctionType<T> = T extends RandomizerFn<string, infer F>
  ? F
  : never

// More precise type mapping that helps with Go to Definition
type MakeRandomizerResult<T extends readonly RandomizerFn<string, unknown>[]> =
  {
    readonly [K in T[number] as K['key']]: ExtractFunctionType<K>
  }

// function getRandomSeed() {
//   return Date.now() * Math.random()
// }

export default function makeRandomizer<
  T extends readonly RandomizerFn<string, unknown>[]
>(seed: number, fns: T): MakeRandomizerResult<T> {
  const rng = next(seed)
  const result = {} as Record<string, unknown>

  // Using a for loop and direct assignment to maintain better source mapping
  for (const fn of fns) {
    // Store the built function with its original reference
    const builtFunction = fn.build(rng)
    result[fn.key] = builtFunction
  }

  return result as MakeRandomizerResult<T>
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
