import { describe, it, expect } from 'vitest'
import wildit from '../src/index'
import { randomInt } from '../src/fns'

const randomizer = wildit()

// Test size per random function
const TEST_SIZE = 1000

describe.skip('fns', () => {
  it('randomInt', () => {
    for (let i = 0; i < TEST_SIZE; i++) {
      const value = randomInt(randomizer, 1, 10)
      expect(value).toBeGreaterThanOrEqual(1)
      expect(value).toBeLessThanOrEqual(10)
    }
  })
})
