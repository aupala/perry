import { Measure, Qualitative } from './utils';

export const SolubilityNature = {
  Insoluble: 'insoluble',
  Soluble: 'soluble',
  Decomposes: 'decomposes',
} as const;
export type SolubilityNature = typeof SolubilityNature[keyof typeof SolubilityNature];

/**
 * Given in parts by weight per 100 parts by weight of the solvent.
 * - Example: 10 g of the solute is soluble in 100 g of the solvent at 20 deg. C.
 * ```ts
 * {
 *    value: 10;
 *    temperature: {value: 20, units: "C"};
 *    gas: false;
 * }
 * ```
 * - Example: 5 cc the solute is soluble in 100 g of the solvent at 40 deg. C.
 * ```ts
 * {
 *    value: 5;
 *    temperature: {value: 20, units: "C"};
 *    gas: true;
 * }
 * ```
 */
export interface QuantitativeSolubility {
  value: number;
  temperature: Measure;
  gas: boolean;
}

export interface SolubilitySheet {
  coldWater: Qualitative<SolubilityNature> | QuantitativeSolubility;
  hotWater: Qualitative<SolubilityNature> | QuantitativeSolubility;
  [key: string]: Qualitative<SolubilityNature> | QuantitativeSolubility;
}
