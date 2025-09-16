import RandomCore from './RandomCore'

export class Wildit extends RandomCore {}

export default function createwildit(seed: number) {
  return new Wildit(seed || Date.now() * Math.random())
}
