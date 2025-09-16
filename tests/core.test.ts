import { describe, it, expect } from 'vitest'
import wildit from '../src'

describe('random core', () => {
  it('basic random', () => {
    const random = wildit(12345)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })

  // Add a test to verify consistency with the same seed
  it('consistent random with same seed', () => {
    const seed = 67890
    const random1 = wildit(seed)
    const random2 = wildit(seed)

    const values1 = Array.from({ length: 5 }, () => random1.random())
    const values2 = Array.from({ length: 5 }, () => random2.random())

    expect(values1).toEqual(values2)
  })

  // Add a test to verify that different seeds produce different sequences
  it('different seeds produce different sequences', () => {
    const random1 = wildit(11111)
    const random2 = wildit(22222)

    const values1 = Array.from({ length: 5 }, () => random1.random())
    const values2 = Array.from({ length: 5 }, () => random2.random())

    expect(values1).not.toEqual(values2)
  })

  // Add a test to verify that generated values are within the expected range
  it('random values are within expected range', () => {
    const random = wildit(54321)

    for (let i = 0; i < 100; i++) {
      const value = random.random()
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(1)
    }
  })

  // Add a test to verify that the random() function is callable
  it('random function is callable', () => {
    const random = wildit(13579)

    expect(typeof random.random).toBe('function')
    const value = random.random()
    expect(typeof value).toBe('number')
  })

  // Add a test to verify that the RandomValues class can be instantiated without errors
  it('RandomValues class instantiation', () => {
    expect(() => wildit(24680)).not.toThrow()
  })

  // Add a test to verify that the RandomValues class correctly handles negative seed values
  it('RandomValues handles negative seed values', () => {
    const random = wildit(-12345)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })

  // Add a test to verify that the RandomValues class correctly handles zero seed value
  it('RandomValues handles zero seed value', () => {
    const random = wildit(0)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })

  // Add a test to verify that the RandomValues class correctly handles very large seed values
  it('RandomValues handles large seed values', () => {
    const random = wildit(1e12)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })

  // Add a test to verify that the RandomValues class correctly handles non-integer seed values
  it('RandomValues handles non-integer seed values', () => {
    const random = wildit(123.456)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })

  // Add a test to verify that the RandomValues class correctly handles very small seed values
  it('RandomValues handles very small seed values', () => {
    const random = wildit(1e-10)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })
})
