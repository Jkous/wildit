import { expect, test } from 'vitest'
import { RandomValues } from '../src'

test('myFunction', () => {
  const random = new RandomValues(12345)

  const value = random.random()
  
  expect(value).toBeGreaterThanOrEqual(0)
  expect(value).toBeLessThan(1)
})

