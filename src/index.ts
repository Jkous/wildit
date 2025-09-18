import type { FnRandomFeature, WilditResult } from './types'
import { splitmix32 } from './utils'

const rng = splitmix32

// function getRandomSeed() {
//   return Date.now() * Math.random()
// }

export default function wildit<K extends keyof FnRandomFeature>(
  seed: number,
  arr: { [P in K]: FnRandomFeature[P] }
): WilditResult<K> {
  const next = rng(seed)
  const entries = Object.entries(arr) as [K, FnRandomFeature[K]][]

  const resultEntries = entries.map(([key, fn]) => {
    return [key, fn(next)]
  })

  return Object.fromEntries(resultEntries) as WilditResult<K>
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
