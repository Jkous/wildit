import { it, expect } from 'vitest'
import wildit, { randomPercent, randomInt } from '../src/index'

const randomizer = wildit(18919841618, [randomInt, randomPercent])

it('basic', () => {
  console.log(randomizer.randomInt(-100, 100))
  console.log(randomizer.randomPercent())
  expect(randomizer).toBeDefined()
})
