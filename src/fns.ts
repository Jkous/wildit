export function randomInt(fn: () => number, min: number, max: number): number {
  return Math.floor(fn() * (max - min + 1)) + min
}

export function shuffle<T>(fn: () => number, array: T[]): T[] {
  const shuffled = array.slice()
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(fn() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
