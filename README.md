# countries-list-as-georgian.js

Countries list with flags ( English/Georgian ). Written in TypeScript, ships its own type definitions.

# Installation

Using npm:
```shell
npm i --save countries-list-as-georgian
```
Using Yarn:
```shell
yarn add countries-list-as-georgian
```
Using PNPM:
```shell
pnpm add countries-list-as-georgian
```

# Example

```js

import countries, {countriesByShortName} from 'countries-list-as-georgian'

console.log(countries, countriesByShortName['GE'])

```

# TypeScript

Types are included, no `@types` package needed.

```ts
import countries, {
  countriesByShortName,
  type Country,
  type CountryCode,
} from 'countries-list-as-georgian'

const georgia: Country = countriesByShortName.GE // autocompletes every code
console.log(georgia.nameGE) // "საქართველო"

const code: CountryCode = 'US'

// Lookups with arbitrary strings return `Country | undefined`
function findCountry(input: string): Country | undefined {
  return countriesByShortName[input.toUpperCase()]
}
```

| Export | Type |
| --- | --- |
| `default`, `countries` | `Country[]` |
| `countriesByShortName` | `Record<CountryCode, Country>` (unknown keys → `Country \| undefined`) |
| `Country` | `{ id, nameEN, nameGE, emoji, code, shortName }` |
| `CountryCode` | `'AD' \| 'AE' \| … \| 'ZW'` |

The package is ESM-only (`import`). On Node.js 20.19+ / 22.12+ it can also be loaded with `require()`.

# Development

```shell
npm install
npm run build      # compiles src/ to dist/
npm run typecheck
```

`npm publish` builds automatically (`prepack`).
