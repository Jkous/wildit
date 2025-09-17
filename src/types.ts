export type RandomizerFn<K extends string, F> = {
  readonly key: K
  readonly build: (rng: () => number) => F
}

// Helper type that preserves the original function references
export type ExtractFunctionType<T> = T extends RandomizerFn<string, infer F>
  ? F
  : never

// More precise type mapping that helps with Go to Definition
export type MakeRandomizerResult<
  T extends readonly RandomizerFn<string, unknown>[]
> = {
  readonly [K in T[number] as K['key']]: ExtractFunctionType<K>
}
