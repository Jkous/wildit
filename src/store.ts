import { SeedError } from './Errors'

export const seedStore = new Map<string, () => number>()

export function addRandomizer(key: string, seed: number) {
  if (typeof key !== 'string' || !key.trim()) {
    throw new SeedError('The key must be a non-empty string.', String(key))
  }

  const parsedKey = key.trim()

  if (parsedKey === 'wildit') {
    throw new SeedError(
      'The key "wildit" is reserved and cannot be used.',
      parsedKey
    )
  }

  if (seedStore.has(parsedKey) && seedStore.get(parsedKey) !== undefined) {
    throw new SeedError(
      `Randomizer with key "${parsedKey}" already exists. Overwriting is not allowed.`,
      parsedKey
    )
  }

  if (!seedStore.has(parsedKey)) {
    const generator = Math.abs(seed) % 1 === 0 ? seed : Math.floor(seed * 1e9)
    seedStore.set(parsedKey, () => generator)
  }
}

export function getRandomizer(key: string) {
  return seedStore.get(key)
}
