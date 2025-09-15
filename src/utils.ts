/**
 * A function that generates a random number generator using the Mulberry32 algorithm.
 * @param seed A number used as the seed for the random number generator.
 * @returns A function that returns a random number between 0 and 1.
 */
export function mulberry32(seed: number) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), t | 1)
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function splitmix32(seed: number) {
  let state = seed >>> 0 // fuerza a 32 bits sin signo

  return () => {
    state = (state + 0x9e3779b9) >>> 0 // constante 32 bits

    let z = state
    z ^= z >>> 16
    z = Math.imul(z, 0x85ebca6b) // multiplicación 32 bits
    z ^= z >>> 13
    z = Math.imul(z, 0xc2b2ae35)
    z ^= z >>> 16

    // Normalizamos a [0,1)
    return (z >>> 0) / 4294967296
  }
}

/**
 * A function that generates a random number generator using the SplitMix32 algorithm.
 * @param seed A number used as the seed for the random number generator.
 * @returns A function that returns a random number between 0 and 1.
 */
export function getRandomGenerator(seed: number) {
  return splitmix32(seed)
}
