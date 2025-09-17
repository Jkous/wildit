import type { RandomizerFunction } from '../types'

export function implRandomChoice(rng: () => number) {
  return (min: number, max: number) => Math.floor(rng() * (max - min + 1)) + min
}

export const randomChoice = {
  key: 'randomChoice',
  build: implRandomChoice
} satisfies RandomizerFunction<
  'randomChoice',
  ReturnType<typeof implRandomChoice>
>
