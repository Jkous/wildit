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
  let state = seed >>> 0 // force to 32-bit unsigned

  return () => {
    state = (state + 0x9e3779b9) >>> 0 // 32-bit constant

    let z = state
    z ^= z >>> 16
    z = Math.imul(z, 0x85ebca6b) // 32-bit multiplication
    z ^= z >>> 13
    z = Math.imul(z, 0xc2b2ae35)
    z ^= z >>> 16

    // Normalize to [0,1)
    return (z >>> 0) / 4294967296
  }
}

export function getRandomGenerator(seed: number) {
  return splitmix32(seed)
}
