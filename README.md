

# wildit

Random value generator for TypeScript. This project provides utilities to generate random numbers, strings, and other data types, useful for testing, simulations, and general development.



## Installation & Usage

Install dependencies:

```bash
pnpm install
```

Run unit tests:

```bash
pnpm run test
```

Build the library:

```bash
pnpm run build
```

Import and use in your project:

```ts
import RandomValues from 'wildit';

const randomizer = createRandomValues(12345)
console.log(randomizer.random()) // Random float between 0 and 1
```


## License

This project is licensed under the MIT License. See the `LICENCE` file for details.


## Issues

Found a bug or have a suggestion? Please open an [issue](https://github.com/Jkous/wildit/issues) describing the problem or improvement.


## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a branch for your feature: `git checkout -b feature/new-feature`
3. Make your changes and commit them.
4. Open a pull request explaining your contribution.

Please follow good coding practices and make sure all tests pass before submitting your PR.
