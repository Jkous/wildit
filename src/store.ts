import { SeedError } from './Errors'
import { next } from './randomizer'

export const seedStore = new Map<string, ReturnType<typeof next>>()

export function addRandomizer(key: string, seed: number) {
  if (typeof key !== 'string' || !key.trim()) {
    throw new SeedError('The key must be a non-empty string.', String(key))
  }

  const parsedKey = key.trim()

  const currentRandomizer = seedStore.get(parsedKey)

  if (currentRandomizer && currentRandomizer.seed() !== seed) {
    throw new SeedError(
      `Randomizer with key "${parsedKey}" already exists. Overwriting is not allowed.`,
      parsedKey
    )
  }

  if (!currentRandomizer) {
    seedStore.set(parsedKey, next(seed))
  }

  return getRandomizer(parsedKey)
}

export function getRandomizer(key: string) {
  const randomizer = seedStore.get(key)
  if (!randomizer) {
    throw new SeedError(`No randomizer found for key "${key}".`, key)
  }

  return randomizer
}

export function clearRandomizers() {
  //const wilditRandomizer = seedStore.get('wildit')
  seedStore.clear()

  //if (wilditRandomizer) {
  //  seedStore.set('wildit', wilditRandomizer)
  //}
}

export function remove(key: string) {
  if (key === 'wildit') {
    throw new SeedError('The default randomizer cannot be removed.', key)
  }

  seedStore.delete(key)
}
