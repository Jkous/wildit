export function splitmix32(seed: number) {
  let state = seed >>> 0 // force to 32-bit unsigned

  const next = () => {
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

  next.seed = () => seed

  return next
}
