# eslint-config-ezze-ts

[ESLint](http://eslint.org/) configuration for [TypeScript](https://www.typescriptlang.org/).

## Installation

```
pnpm add @stylistic/eslint-plugin-js@2 @stylistic/eslint-plugin-ts@2 @typescript-eslint/eslint-plugin@7 @typescript-eslint/parser@7 eslint@8 eslint-plugin-import@2 eslint-plugin-prettier@5 --save-dev
```

## Usage

Create `.eslintrc.js` file in your project and place the following there:

```javascript
module.exports = {
  extends: ['ezze-ts']
}
```
    
See [Shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) for more details.

## License

[MIT](LICENSE.md)
