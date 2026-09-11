# eslint-config-ezze-ts

[ESLint](http://eslint.org/) configuration for [TypeScript](https://www.typescriptlang.org/).

## Installation

```
pnpm add @eslint/js@^10.0.1 @stylistic/eslint-plugin@^5.10.0 eslint@^10.10.0 eslint-plugin-import-x@^4.17.1 typescript-eslint@^8.70.0 -D
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
