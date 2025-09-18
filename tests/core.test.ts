import { it, expect } from 'vitest'
import wildit, { randomInt, shuffle } from '../src/index'

const randomizer = wildit(18919841618, { randomInt })

it('basic', () => {
  const intValue = randomizer.randomInt(-100, 100)

  expect(randomizer).toBeDefined()
  expect(typeof intValue).toBe('number')
  expect(intValue).toBeGreaterThanOrEqual(-100)
  expect(intValue).toBeLessThanOrEqual(100)
})
