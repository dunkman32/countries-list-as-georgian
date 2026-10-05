import { countries } from "./countries.js";
import type { Country, CountryCode } from "./types.js";

export type { Country, CountryCode };

/**
 * Object mapping country short names (ISO codes) to country objects.
 *
 * Known codes resolve to `Country`; arbitrary strings resolve to
 * `Country | undefined`, so lookups with user input stay type-safe.
 *
 * @example
 * ```typescript
 * import { countriesByShortName } from 'countries-list-as-georgian';
 *
 * const usa = countriesByShortName['US'];
 * console.log(usa.nameEN); // "UNITED STATES"
 * console.log(usa.nameGE); // "ამერიკის შეერთებული შტატები"
 * ```
 */
export const countriesByShortName: Record<CountryCode, Country> &
  Partial<Record<string, Country>> = Object.fromEntries(
  countries.map((country) => [country.shortName, country]),
) as Record<CountryCode, Country>;

export { countries };

export default countries;
