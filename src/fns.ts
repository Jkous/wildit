import type { Randomizer } from './types'

export function randomInt(rng: Randomizer) {
  return (min: number, max: number): number => {
    return Math.floor(rng() * (max - min + 1)) + min
  }
}

export function shuffle<T>(rng: Randomizer) {
  return (array: T[]): T[] => {
    const shuffled = array.slice()
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1))

      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
}
