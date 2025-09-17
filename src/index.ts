import { SeedError } from './Errors'
import { addRandomizer } from './store'

function getRandomSeed() {
  return Date.now() * Math.random()
}

export default function createRandomizer(
  seed?: number
): ReturnType<typeof addRandomizer>
export default function createRandomizer(
  key: string,
  seed?: number
): ReturnType<typeof addRandomizer>
export default function createRandomizer(
  arg1?: string | number,
  arg2?: number
): ReturnType<typeof addRandomizer> {
  if (typeof arg1 === 'number' || arg1 === undefined) {
    return addRandomizer('wildit', arg1 ?? getRandomSeed())
  }

  const parsedKey = arg1.trim()
  if (parsedKey === 'wildit') {
    throw new SeedError(
      'The key "wildit" is reserved and cannot be used.',
      parsedKey
    )
  }

  const seed = arg2 ?? getRandomSeed()
  return addRandomizer(parsedKey, seed)
}
