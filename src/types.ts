import type { randomInt, shuffle } from './fns'

export type FnRandomFeature = {
  randomInt: typeof randomInt
  shuffle: typeof shuffle
}

export type Randomizer = () => number
