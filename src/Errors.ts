export class WilditError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'WilditError'
  }
}

export class SeedError extends WilditError {
  constructor(
    readonly message: string,
    readonly seed: string
  ) {
    super(message)
    this.name = 'SeedError'
  }
}

export class RandomizerError extends WilditError {
  constructor(readonly message: string) {
    super(message)
    this.name = 'RandomizerError'
  }
}
