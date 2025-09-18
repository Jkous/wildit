// function mulberry32(seed: number) {
//   let t = seed >>> 0

//   const next = () => {
//     t += 0x6d2b79f5
//     let r = Math.imul(t ^ (t >>> 15), t | 1)
//     r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
//     return ((r ^ (r >>> 14)) >>> 0) / 4294967296
//   }
//   next.seed = () => seed

//   return next
// }

export function next(seed: number) {
  return splitmix32(seed)
}
