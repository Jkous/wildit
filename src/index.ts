import RandomCore from './RandomCore'

export class RandomValues extends RandomCore {}

export default function fnRandomValues(seed: number) {
  return new RandomValues(seed || Date.now() * Math.random())
}
