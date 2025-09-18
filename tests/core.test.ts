import { it, expect } from 'vitest'
import wildit, { randomInt, shuffle } from '../src/index'

const randomizer = wildit(18915616, { randomInt, shuffle })

it('basic', () => {
  const intValue = randomizer.randomInt(-100, 100)

  const shuffle = randomizer.shuffle(['a', 'b', 'c', 'd', 'e'])

  console.log(shuffle)

  expect(randomizer).toBeDefined()
  expect(typeof intValue).toBe('number')
  expect(intValue).toBeGreaterThanOrEqual(-100)
  expect(intValue).toBeLessThanOrEqual(100)
})
