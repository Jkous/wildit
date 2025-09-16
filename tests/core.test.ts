import { expect, test, describe } from 'vitest'
import wildit from '../src'

describe('random core', () => {
  test('basic random', () => {
    const random = wildit(12345)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })

  // Agregar un nuevo test para verificar la consistencia con la misma semilla
  test('consistent random with same seed', () => {
    const seed = 67890
    const random1 = wildit(seed)
    const random2 = wildit(seed)

    const values1 = Array.from({ length: 5 }, () => random1.random())
    const values2 = Array.from({ length: 5 }, () => random2.random())

    expect(values1).toEqual(values2)
  })

  // Agregar un test para verificar que diferentes semillas producen diferentes secuencias
  test('different seeds produce different sequences', () => {
    const random1 = wildit(11111)
    const random2 = wildit(22222)

    const values1 = Array.from({ length: 5 }, () => random1.random())
    const values2 = Array.from({ length: 5 }, () => random2.random())

    expect(values1).not.toEqual(values2)
  })

  // Agregar un test para verificar que los valores generados están dentro del rango esperado
  test('random values are within expected range', () => {
    const random = wildit(54321)

    for (let i = 0; i < 100; i++) {
      const value = random.random()
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(1)
    }
  })

  // Agregar un test para verificar que la función random() es llamada correctamente
  test('random function is callable', () => {
    const random = wildit(13579)

    expect(typeof random.random).toBe('function')
    const value = random.random()
    expect(typeof value).toBe('number')
  })

  // Agregar un test para verificar que la clase RandomValues puede ser instanciada sin errores
  test('RandomValues class instantiation', () => {
    expect(() => wildit(24680)).not.toThrow()
  })

  // Agregar un test para verificar que la clase RandomValues maneja correctamente valores de semilla negativos
  test('RandomValues handles negative seed values', () => {
    const random = wildit(-12345)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })

  // Agregar un test para verificar que la clase RandomValues maneja correctamente valores de semilla cero
  test('RandomValues handles zero seed value', () => {
    const random = wildit(0)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })

  // Agregar un test para verificar que la clase RandomValues maneja correctamente valores de semilla muy grandes
  test('RandomValues handles large seed values', () => {
    const random = wildit(1e12)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })
  // Agregar un test para verificar que la clase RandomValues maneja correctamente valores de semilla no enteros
  test('RandomValues handles non-integer seed values', () => {
    const random = wildit(123.456)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })
  // Agregar un test para verificar que la clase RandomValues maneja correctamente valores de semilla muy pequeños
  test('RandomValues handles very small seed values', () => {
    const random = wildit(1e-10)

    const value = random.random()

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThan(1)
  })
})
