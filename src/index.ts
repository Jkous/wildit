import RandomCore from './RandomCore'

export class RandomValues extends RandomCore {}

export default function createRandomValues(seed: number) {
  return new RandomValues(seed || Date.now() * Math.random())
}
