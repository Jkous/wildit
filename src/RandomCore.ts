import { getRandomGenerator } from './utils'

export default class RandomCore {
  #seed: number
  #generator: () => number

  constructor(seed: number) {
    this.#seed = seed
    this.#generator = getRandomGenerator(this.#seed)
  }

  random() {
    return this.#generator()
  }
}
