import { it, expect } from 'vitest'
import wildit from '../src/index'

const randomizer = wildit()

it('basic', () => {
  expect(randomizer).toBeDefined()
})
