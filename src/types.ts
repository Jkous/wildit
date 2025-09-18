import type { randomInt, shuffle } from './fns'

export type Randomizer = () => number

export type FnRandomFeature = {
  randomInt: typeof randomInt
  shuffle: typeof shuffle
}

export type RandomFns<K extends keyof FnRandomFeature> = {
  [P in K]: P
}

export type WilditResult<K extends keyof FnRandomFeature> = {
  [P in K]: ReturnType<FnRandomFeature[P]>
}
