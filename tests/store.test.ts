import { describe, it, expect } from 'vitest'
import { addRandomizer, getRandomizer } from '../src/store'
import { SeedError } from '../src/Errors'

describe('seedStore key validation', () => {
  it('allows adding a valid key', () => {
    expect(() => addRandomizer('user1', 123)).not.toThrow()
    expect(getRandomizer('user1')).toBeDefined()
  })

  it('rejects empty key', () => {
    expect(() => addRandomizer('', 123)).toThrow(SeedError)
    expect(() => addRandomizer('   ', 123)).toThrow(SeedError)
  })

  it('rejects reserved key "wildit"', () => {
    expect(() => addRandomizer('wildit', 123)).toThrow(SeedError)
  })

  it('rejects duplicate key', () => {
    addRandomizer('unique', 456)
    expect(() => addRandomizer('unique', 789)).toThrow(SeedError)
  })
})
