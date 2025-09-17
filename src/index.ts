import { SeedError } from './Errors'
import { addRandomizer } from './store'
import { next } from './randomizer'
import type { RandomizerFunction } from './types'

function getRandomSeed() {
  return Date.now() * Math.random()
}

export default function makeRandomizer<
  T extends readonly { key: string; build: (rng: () => any) => any }[]
>(seed: number, fns: T) {
  const rng = next(seed)
  return Object.fromEntries(fns.map((fn) => [fn.key, fn.build(rng)])) as {
    [K in T[number] as K['key']]: ReturnType<T[number]['build']>
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
export { randomChoice, type implRandomChoice } from './fns/choice'
