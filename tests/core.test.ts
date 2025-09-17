import { it, expect } from 'vitest'
import wildit, { randomChoice, randomInt } from '../src/index'

const randomizer = wildit(18919841618, [randomInt, randomChoice])

it('basic', () => {
  console.log(randomizer.randomInt(-100, 100))
  console.log(randomizer.randomChoice(-100, 100))
  expect(randomizer).toBeDefined()
})
