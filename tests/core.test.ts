import { beforeEach, describe, it, expect } from 'vitest'
import { clearRandomizers } from '../src/store'
import wildit from '../src/index'
import { SeedError } from '../src/Errors'

describe('core', () => {
  beforeEach(() => {
    clearRandomizers()
  })

  it('should create a randomizer with a specific seed', () => {
    const randomizer = wildit(123456)
    expect(typeof randomizer).toBe('function')
    expect(randomizer.seed).toBeDefined()
  })

  it('should create two randomizers with the same seed', () => {
    const randomizer1 = wildit('r1', 123456)
    const randomizer2 = wildit('r2', 123456)

    expect(randomizer1.seed()).toBeDefined()
    expect(randomizer2.seed()).toBeDefined()
    expect(randomizer1.seed()).toBe(randomizer2.seed())
  })

  it('should throw an error when creating two randomizers with the same key but different seeds', () => {
    wildit('duplicateKey', 123456)
    expect(() => wildit('duplicateKey', 654321)).toThrow(SeedError)
  })

  it('Should return the same randomizer if called with the same key and same seed', () => {
    const randomizer1 = wildit('r1', 123456)
    const randomizer2 = wildit('r1', 123456)

    expect(randomizer1).toBe(randomizer2)
    expect(randomizer1.seed()).toBe(randomizer2.seed())
  })

  it('Two randomizers should generate the same sequence with the same seed', () => {
    const randomizer1 = wildit('r1', 123456)
    const randomizer2 = wildit('r2', 123456)

    for (let i = 0; i < 10; i++) {
      const value1 = randomizer1()
      const value2 = randomizer2()
      expect(value1).toBe(value2)
    }
  })

  it('should create a randomizer and generate a seed', () => {
    const randomizer = wildit()
    expect(randomizer).toBeTypeOf('function')

    expect(randomizer.seed()).toBeDefined()
    expect(randomizer.seed()).toBeTypeOf('number')
  })
})
