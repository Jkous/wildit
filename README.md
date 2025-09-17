

# Wildit

Random value generator for TypeScript. This project provides utilities to generate random numbers, strings, and other data types, useful for testing, simulations, and general development.



## Install

```bash
npm install wildit
pnpm install wildit
```

## Usage

Import and use in your project:

```ts
import wildit, { randomInt } from 'wildit';

// Create a default randomizer called `wildit` with a random seed
wildit();

// Create a randomizer with a specific seed
wildit('my_randomizer_key', 12345);


// Get a random integer between 0 and 100
const randomInt = wildit('my_randomizer_key').randomInt(0, 100); // Random integer between 0 and 100


```




## Issues

Found a bug or have a suggestion? Please open an [issue](https://github.com/Jkous/wildit/issues) describing the problem or improvement.


## Contributing

For guidelines on contributing, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.


## License

This project is licensed under the MIT License. For full details, please refer to the [LICENSE](LICENSE) file.