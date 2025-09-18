import type { FnRandomFeature } from './types'
import { splitmix32 } from './utils'

const rng = splitmix32

// function getRandomSeed() {
//   return Date.now() * Math.random()
// }

export default function wildit<K extends keyof FnRandomFeature>(
  seed: number,
  arr: { [P in K]: FnRandomFeature[P] }
): { [P in K]: ReturnType<FnRandomFeature[P]> } {
  const result = {} as { [P in K]: ReturnType<FnRandomFeature[P]> }

  const next = rng(seed)

  for (const key in arr) {
    result[key as K] = arr[key as K](next)
  }

  return result
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

export { randomInt, shuffle } from './fns'
