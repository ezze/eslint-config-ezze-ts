# eslint-config-ezze-ts

[ESLint](http://eslint.org/) configuration for [TypeScript](https://www.typescriptlang.org/).

## Installation

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-ezze-ts --dev
```

or

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-ezze-ts --save-dev
```
    
## Usage

Create `.eslintrc.json` file in your project and place the following there:

```json
{
  "extends": "ezze-ts"
}
```
    
See [Shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) for more details.    

## Contribution

Before making a pull request be sure that your changes are rebased to `develop` branch.

## License

[MIT](LICENSE)
