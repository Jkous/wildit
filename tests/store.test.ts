import { beforeEach, describe, it, expect } from 'vitest'
import { clearRandomizers, getRandomizer } from '../src/store'
import wildit from '../src/index'
import { SeedError } from '../src/Errors'

describe('seedstore', () => {
  beforeEach(() => {
    clearRandomizers()
  })

  it('should allow adding a valid key', () => {
    expect(() => wildit('user1')).not.toThrow()
    expect(getRandomizer('user1')).toBeDefined()
  })

  it('should reject an empty key', () => {
    expect(() => wildit('')).toThrow(SeedError)
    expect(() => wildit('   ')).toThrow(SeedError)
  })

  it('should reject the reserved key "wildit"', () => {
    expect(() => wildit('wildit')).toThrow(SeedError)
  })

  it('should reject a duplicate key', () => {
    wildit('unique')
    expect(() => wildit('unique')).toThrow(SeedError)
  })
})
