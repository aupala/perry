export const Phases = {
  Gas: "Gas",
  Liquid: "Liquid",
  Solid: "Solid"
} as const;

export type Phase = typeof Phases[keyof typeof Phases];

export const Categories = {
  DiatomicNonmetal: "diatomic nonmetal",
  NobleGas: "noble gas",
  AlkaliMetal: "alkali metal",
  AlkalineEarthMetal: "alkaline earth metal",
  Metalloid: "metalloid",
  PolyatomicNonmetal: "polyatomic nonmetal",
  PostTransitionMetal: "post-transition metal",
  TransitionMetal: "transition metal",
  Lanthanide: "lanthanide",
  Actinide: "actinide"
} as const;

export type Category = typeof Categories[keyof typeof Categories];

export interface ElementProps {
  name: string;
  appearance?: string;
  atomicMass: number;
  boil?: number;
  category: Category | string;
  color?: string;
  /**
   * Given in `g/l` for gases and `g/cm³` for solids and liquids
   */
  density?: number;
  discoveredBy?: string;
  melt?: number;
  /**
   * In (mol*K)
   */
  molarHeat?: number;
  namedBy?: string;
  number: number;
  period: number;
  phase: Phase;
  source: string;
  spectralImage?: string;
  summary: string;
  symbol: string;
  xPosition: number;
  yPosition: number;
  shells: number[];
  electronConfiguration: string;
  electronConfigurationSemantic: string;
  electronAffinity?: number;
  electronegativityPauling?: number;
  ionizationEnergies?: number[];
}
