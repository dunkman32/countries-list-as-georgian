/**
 * Represents a country with English and Georgian names, emoji, country code, and short name
 */
export interface Country {
  /** Unique identifier for the country */
  id: number;
  /** Country name in English */
  nameEN: string;
  /** Country name in Georgian */
  nameGE: string;
  /** Country flag emoji (can be null for some entries) */
  emoji: string | null;
  /** Country phone code (can be null for some entries) */
  code: string | null;
  /** ISO country code (short name) */
  shortName: string;
}

/**
 * Array of countries with English and Georgian names, flags, and codes
 */
declare const countries: Country[];

/**
 * Object mapping country short names (ISO codes) to country objects
 * @example
 * ```typescript
 * import { countriesByShortName } from 'countries-list-as-georgian';
 * 
 * const usa = countriesByShortName['US'];
 * console.log(usa.nameEN); // "UNITED STATES"
 * console.log(usa.nameGE); // "ამერიკის შეერთებული შტატები"
 * ```
 */
export const countriesByShortName: Record<string, Country>;

export default countries;
