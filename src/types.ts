import type { randomInt, shuffle } from './fns'

export type FnRandomFeature = {
  randomInt: typeof randomInt
  shuffle: typeof shuffle
}

export type FnRandomResult = ReturnType<FnRandomFeature[keyof FnRandomFeature]>

export type Randomizer = () => number
