import { next } from './randomizer'

function getRandomSeed() {
  return Date.now() * Math.random()
}

export default function makeRandomizer(seed: number, fns: Function[]) {
  const rng = next(seed)
  return Object.fromEntries(fns.map((fn) => [fn.key, fn.build(rng)]))
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
