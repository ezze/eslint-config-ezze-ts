# eslint-config-ezze-ts

[ESLint](http://eslint.org/) configuration for [TypeScript](https://www.typescriptlang.org/).

## Installation

```
pnpm add @eslint/js@^9.16.0 @stylistic/eslint-plugin-js@^2.11.0 @stylistic/eslint-plugin-ts@^2.11.0 eslint@^9.16.0 eslint-plugin-import@^2.31.0 typescript-eslint@^8.17.0 -D
```

## Usage

Create `eslint.config.js` file in your project and place the following there:

```typescript
import ezzeTypeScript from 'eslint-config-ezze-ts';

export default [
  ...ezzeTypeScript
];
```
    
See [Shareable configs](https://eslint.org/docs/latest/extend/shareable-configs) for more details.

## License

[MIT](LICENSE.md)
