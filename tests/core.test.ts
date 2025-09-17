import { it, expect } from 'vitest'
import wildit, { randomPercent, randomInt } from '../src/index'

const randomizer = wildit(18919841618, [randomInt, randomPercent])

it('basic', () => {
  const intValue = randomizer.randomInt(-100, 100)
  const percentValue = randomizer.randomPercent()

  expect(randomizer).toBeDefined()
  expect(typeof intValue).toBe('number')
  expect(typeof percentValue).toBe('number')
  expect(intValue).toBeGreaterThanOrEqual(-100)
  expect(intValue).toBeLessThanOrEqual(100)
  expect(percentValue).toBeGreaterThanOrEqual(1)
  expect(percentValue).toBeLessThanOrEqual(100)
})
