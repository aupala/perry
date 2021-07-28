import { DIPPRVaporPressureProps } from '../interfaces/utils';

export const DIPPRVaporPressureDictionary: Record<
  string,
  DIPPRVaporPressureProps
> = {
  Acetaldehyde: {
    name: 'Acetaldehyde',
    formula: 'C2H4O',
    CAS: '75-07-0',
    C1: 52.9107,
    C2: -4643.14,
    C3: -4.50683,
    C4: 2.7e-17,
    C5: 6,
    minimumTemperature: 149.78,
    maximumTemperature: 466,
    pressureAtMinimumTemperature: 5.15e-1,
    pressureAtMaximumTemperature: 5.57e6,
  },

  Acetalmide: {
    name: 'Acetalmide',
    formula: 'C2H5NO',
    CAS: '60-35-5',
    C1: 125.81,
    C2: -12376,
    C3: -14.589,
    C4: 5.0824e-6,
    C5: 2,
    minimumTemperature: 353.33,
    maximumTemperature: 761,
    pressureAtMinimumTemperature: 3.36e2,
    pressureAtMaximumTemperature: 6.569e6,
  },

  AceticAcid: {
    name: 'Acetic acid',
    formula: 'C2H4O2',
    CAS: '64-19-7',
    C1: 53.27,
    C2: -6304.5,
    C3: -4.2985,
    C4: 8.89e-18,
    C5: 6,
    minimumTemperature: 289.81,
    maximumTemperature: 591.95,
    pressureAtMinimumTemperature: 1.28e3,
    pressureAtMaximumTemperature: 5.739e6,
  },

  AceticAnhydride: {
    name: 'Acetic anhydride',
    formula: 'C4H6O3',
    CAS: '108-24-7',
    C1: 67.1818,
    C2: -7463.47,
    C3: -6.24388,
    C4: 6.86e-18,
    C5: 6,
    minimumTemperature: 200.15,
    maximumTemperature: 606,
    pressureAtMinimumTemperature: 4.1e-2,
    pressureAtMaximumTemperature: 4.0e6,
  },

  Acetone: {
    name: 'Acetone',
    formula: 'C3H6O',
    CAS: '67-64-1',
    C1: 69.006,
    C2: -5599.6,
    C3: -7.0985,
    C4: 6.2237e-6,
    C5: 2,
    minimumTemperature: 178.45,
    maximumTemperature: 508.2,
    pressureAtMinimumTemperature: 2.79,
    pressureAtMaximumTemperature: 4.709e6,
  },

  Acetonitrile: {
    name: 'Acetonitrile',
    formula: 'C2H3N',
    CAS: '75-05-8',
    C1: 46.735,
    C2: -5126.18,
    C3: -3.54064,
    C4: 1.4e-17,
    C5: 6,
    minimumTemperature: 229.32,
    maximumTemperature: 545.5,
    pressureAtMinimumTemperature: 1.71e2,
    pressureAtMaximumTemperature: 4.85e6,
  },

  Acetylene: {
    name: 'Acetylene',
    formula: 'C2H2',
    CAS: '74-86-2',
    C1: 39.63,
    C2: -2552.2,
    C3: -2.78,
    C4: 2.39e-16,
    C5: 6,
    minimumTemperature: 192.4,
    maximumTemperature: 308.3,
    pressureAtMinimumTemperature: 1.27e5,
    pressureAtMaximumTemperature: 6.106e6,
  },

  Acrolein: {
    name: 'Acrolein',
    formula: 'C3H4O',
    CAS: '107-02-8',
    C1: 138.4,
    C2: -7122.7,
    C3: -19.638,
    C4: 0.026447,
    C5: 1,
    minimumTemperature: 185.45,
    maximumTemperature: 506,
    pressureAtMinimumTemperature: 1.03e1,
    pressureAtMaximumTemperature: 5.02e6,
  },

  Acrylicacid: {
    name: 'AcrylicAcid',
    formula: 'C3H4O2',
    CAS: '79-10-7',
    C1: 46.745,
    C2: -6587.1,
    C3: -3.2208,
    C4: 5.2253e-7,
    C5: 2,
    minimumTemperature: 286.15,
    maximumTemperature: 615,
    pressureAtMinimumTemperature: 2.57e2,
    pressureAtMaximumTemperature: 5.661e6,
  },

  Acrylonitrile: {
    name: 'Acrylonitrile',
    formula: 'C3H3N',
    CAS: '107-13-1',
    C1: 57.3157,
    C2: -5662.2,
    C3: -5.06221,
    C4: 1.51e-17,
    C5: 6,
    minimumTemperature: 189.63,
    maximumTemperature: 540,
    pressureAtMinimumTemperature: 2.47,
    pressureAtMaximumTemperature: 4.66e6,
  },

  Air: {
    name: 'Air',
    formula: 'Mixture',
    CAS: '132259-10-0',
    C1: 21.662,
    C2: -692.39,
    C3: -0.39208,
    C4: 0.0047574,
    C5: 1,
    minimumTemperature: 59.15,
    maximumTemperature: 132.45,
    pressureAtMinimumTemperature: 5.64e3,
    pressureAtMaximumTemperature: 3.793e6,
  },

  Ammonia: {
    name: 'Ammonia',
    formula: 'NH3',
    CAS: '7664-41-7',
    C1: 90.483,
    C2: -4669.7,
    C3: -11.607,
    C4: 0.017194,
    C5: 1,
    minimumTemperature: 195.41,
    maximumTemperature: 405.65,
    pressureAtMinimumTemperature: 6.11e3,
    pressureAtMaximumTemperature: 1.13e7,
  },

  Anisole: {
    name: 'Anisole',
    formula: 'C7H8O',
    CAS: '100-66-3',
    C1: 128.06,
    C2: -9307.7,
    C3: -16.693,
    C4: 0.014919,
    C5: 1,
    minimumTemperature: 235.65,
    maximumTemperature: 645.6,
    pressureAtMinimumTemperature: 2.45,
    pressureAtMaximumTemperature: 4.273e6,
  },

  Argon: {
    name: 'Argon',
    formula: 'Ar',
    CAS: '7440-37-1',
    C1: 42.127,
    C2: -1093.1,
    C3: -4.1425,
    C4: 0.000057254,
    C5: 2,
    minimumTemperature: 83.78,
    maximumTemperature: 150.86,
    pressureAtMinimumTemperature: 6.87e4,
    pressureAtMaximumTemperature: 4.896e6,
  },

  Benzamide: {
    name: 'Banzamide',
    formula: 'C7H7NO',
    CAS: '55-21-0',
    C1: 85.474,
    C2: -11932,
    C3: -8.3348,
    C4: 1.29e-18,
    C5: 6,
    minimumTemperature: 403,
    maximumTemperature: 824,
    pressureAtMinimumTemperature: 3.55e2,
    pressureAtMaximumTemperature: 5.047e6,
  },

  Benzene: {
    name: 'Benzene',
    formula: 'C6H6',
    CAS: '71-43-2',
    C1: 83.107,
    C2: -6486.2,
    C3: -9.2194,
    C4: 6.9844e-6,
    C5: 2,
    minimumTemperature: 278.68,
    maximumTemperature: 562.05,
    pressureAtMinimumTemperature: 4.76e3,
    pressureAtMaximumTemperature: 4.875e6,
  },

  Benzenethiol: {
    name: 'Benzenethiol',
    formula: 'C6H6S',
    CAS: '108-98-5',
    C1: 77.765,
    C2: -8455.1,
    C3: -7.7404,
    C4: 4.31e-18,
    C5: 6,
    minimumTemperature: 258.27,
    maximumTemperature: 689,
    pressureAtMinimumTemperature: 7.68,
    pressureAtMaximumTemperature: 4.728e6,
  },

  BenzoicAcid: {
    name: 'Benzoic acid',
    formula: 'C7H6O2',
    CAS: '65-85-0',
    C1: 88.513,
    C2: -11829,
    C3: -8.6826,
    C4: 2.32e-19,
    C5: 6,
    minimumTemperature: 395.45,
    maximumTemperature: 751,
    pressureAtMinimumTemperature: 7.96e2,
    pressureAtMaximumTemperature: 4.469e6,
  },

  Benzonitrile: {
    name: 'Benzonitrile',
    formula: 'C7H5N',
    CAS: '100-47-0',
    C1: 55.0403,
    C2: -7363.83,
    C3: -4.50612,
    C4: 1.95e-18,
    C5: 6,
    minimumTemperature: 260.28,
    maximumTemperature: 702.3,
    pressureAtMinimumTemperature: 5.4,
    pressureAtMaximumTemperature: 4.215e6,
  },

  Benzophenone: {
    name: 'Benzophenone',
    formula: 'C13H10O',
    CAS: '119-61-9',
    C1: 88.404,
    C2: -11769,
    C3: -8.9014,
    C4: 1.93e-18,
    C5: 6,
    minimumTemperature: 321.35,
    maximumTemperature: 830,
    pressureAtMinimumTemperature: 1.49,
    pressureAtMaximumTemperature: 3.357e6,
  },

  BenzylAlcohol: {
    name: 'Benzyl alcohol',
    formula: 'C7H8O',
    CAS: '100-51-6',
    C1: 100.68,
    C2: -11059,
    C3: -10.709,
    C4: 3.06e-18,
    C5: 6,
    minimumTemperature: 257.85,
    maximumTemperature: 720.15,
    pressureAtMinimumTemperature: 1.88e-1,
    pressureAtMaximumTemperature: 4.372e6,
  },

  BenzylEthylEther: {
    name: 'Benzyl ethyl ether',
    formula: 'C9H12O',
    CAS: '539-30-0',
    C1: 68.541,
    C2: -7886.2,
    C3: -6.5804,
    C4: 2.4285e-6,
    C5: 2,
    minimumTemperature: 275.65,
    maximumTemperature: 662,
    pressureAtMinimumTemperature: 2.31e1,
    pressureAtMaximumTemperature: 3.113e6,
  },

  BenzylMercaptan: {
    name: 'Benzyl mercaptan',
    formula: 'C7H8S',
    CAS: '100-53-8',
    C1: 118.02,
    C2: -10527,
    C3: -13.91,
    C4: 6.4794e-6,
    C5: 2,
    minimumTemperature: 243.95,
    maximumTemperature: 718,
    pressureAtMinimumTemperature: 2.98e-1,
    pressureAtMaximumTemperature: 4.0074e6,
  },

  Biphenyl: {
    name: 'Biphenyl',
    formula: 'C12H10',
    CAS: '92-52-4',
    C1: 77.314,
    C2: -9910.4,
    C3: -7.5079,
    C4: 2.24e-18,
    C5: 6,
    minimumTemperature: 342.2,
    maximumTemperature: 773,
    pressureAtMinimumTemperature: 9.42e1,
    pressureAtMaximumTemperature: 3.407e6,
  },

  Bromine: {
    name: 'Bromine',
    formula: 'Br2',
    CAS: '7726-95-6',
    C1: 108.26,
    C2: -6592,
    C3: -14.16,
    C4: 0.016043,
    C5: 1,
    minimumTemperature: 265.85,
    maximumTemperature: 584.15,
    pressureAtMinimumTemperature: 5.85e3,
    pressureAtMaximumTemperature: 1.028e7,
  },

  Bromobenzene: {
    name: 'Bromobenzene',
    formula: 'C6H5Br',
    CAS: '108-86-1',
    C1: 63.749,
    C2: -7130.2,
    C3: -5.879,
    C4: 5.21e-18,
    C5: 6,
    minimumTemperature: 242.43,
    maximumTemperature: 670.15,
    pressureAtMinimumTemperature: 7.84,
    pressureAtMaximumTemperature: 4.52e6,
  },

  Bromoethane: {
    name: 'Bromoethane',
    formula: 'C2H5Br',
    CAS: '74-96-4',
    C1: 57.3242,
    C2: -4931.2,
    C3: -5.2244,
    C4: 3.08e-17,
    C5: 6,
    minimumTemperature: 154.25,
    maximumTemperature: 503.8,
    pressureAtMinimumTemperature: 3.8e-1,
    pressureAtMaximumTemperature: 5.565e6,
  },

  Bromomethane: {
    name: 'Bromomethane',
    formula: 'CH3Br',
    CAS: '74-83-9',
    C1: 44.7643,
    C2: -3907.8,
    C3: -3.4016,
    C4: 2.95e-17,
    C5: 6,
    minimumTemperature: 179.44,
    maximumTemperature: 464,
    pressureAtMinimumTemperature: 2.07e2,
    pressureAtMaximumTemperature: 6.929e6,
  },

  '1,2Butadiene': {
    name: '1,2-Butadiene',
    formula: 'C4H6',
    CAS: '590-19-2',
    C1: 39.714,
    C2: -3769.9,
    C3: -2.6407,
    C4: 6.94e-18,
    C5: 6,
    minimumTemperature: 136.95,
    maximumTemperature: 452,
    pressureAtMinimumTemperature: 4.47e-1,
    pressureAtMaximumTemperature: 4.361e6,
  },

  '1,3Butadiene': {
    name: '1,3-Butadiene',
    formula: 'C4H6',
    CAS: '106-99-0',
    C1: 75.572,
    C2: -4621.9,
    C3: -8.5323,
    C4: 0.000012269,
    C5: 2,
    minimumTemperature: 164.25,
    maximumTemperature: 425,
    pressureAtMinimumTemperature: 6.92e1,
    pressureAtMaximumTemperature: 4.303e6,
  },

  Butane: {
    name: 'Butane',
    formula: 'C4H10',
    CAS: '106-97-8',
    C1: 66.343,
    C2: -4363.2,
    C3: -7.046,
    C4: 9.4509e-6,
    C5: 2,
    minimumTemperature: 134.86,
    maximumTemperature: 425.12,
    pressureAtMinimumTemperature: 6.74e-1,
    pressureAtMaximumTemperature: 3.77e6,
  },

  '1,2Butanediol': {
    name: '1,2-Butanediol',
    formula: 'C4H10O2',
    CAS: '584-03-2',
    C1: 103.28,
    C2: -11548,
    C3: -10.925,
    C4: 4.26e-18,
    C5: 6,
    minimumTemperature: 220,
    maximumTemperature: 680,
    pressureAtMinimumTemperature: 2.93e-4,
    pressureAtMaximumTemperature: 5.202e6,
  },

  '1,3Butanediol': {
    name: '1,3-Butanediol',
    formula: 'C4H10O2',
    CAS: '107-88-0',
    C1: 123.22,
    C2: -12620,
    C3: -13.986,
    C4: 0.000003926,
    C5: 2,
    minimumTemperature: 196.15,
    maximumTemperature: 676,
    pressureAtMinimumTemperature: 3.74e-7,
    pressureAtMaximumTemperature: 4.033e6,
  },

  '1Butanol': {
    name: '1-Butanol',
    formula: 'C4H10O',
    CAS: '71-36-3',
    C1: 106.29483,
    C2: -9866.35511,
    C3: -11.6553,
    C4: 1.08e-17,
    C5: 6,
    minimumTemperature: 183.85,
    maximumTemperature: 563.1,
    pressureAtMinimumTemperature: 2.91e-4,
    pressureAtMaximumTemperature: 4.414e6,
  },

  '2Butanol': {
    name: '2-Butanol',
    formula: 'C4H10O',
    CAS: '78-92-2',
    C1: 122.552,
    C2: -10236.2,
    C3: -14.125,
    C4: 2.36e-17,
    C5: 6,
    minimumTemperature: 158.45,
    maximumTemperature: 535.9,
    pressureAtMinimumTemperature: 1.24e-6,
    pressureAtMaximumTemperature: 4.19e6,
  },

  '1Butene': {
    name: '1-Butene',
    formula: 'C4H8',
    CAS: '106-98-9',
    C1: 51.836,
    C2: -4019.2,
    C3: -4.5229,
    C4: 4.48e-17,
    C5: 6,
    minimumTemperature: 87.8,
    maximumTemperature: 419.5,
    pressureAtMinimumTemperature: 6.94e-7,
    pressureAtMaximumTemperature: 4.021e6,
  },

  cis2Butene: {
    name: 'cis-2-Butene',
    formula: 'C4H8',
    CAS: '590-18-1',
    C1: 72.541,
    C2: -4691.2,
    C3: -7.9776,
    C4: 0.000010368,
    C5: 2,
    minimumTemperature: 134.26,
    maximumTemperature: 435.5,
    pressureAtMinimumTemperature: 2.72e-1,
    pressureAtMaximumTemperature: 4.238e6,
  },

  trans2Butene: {
    name: 'trans-2-Butene',
    formula: 'C4H8',
    CAS: '624-64-6',
    C1: 71.704,
    C2: -4563.1,
    C3: -7.9053,
    C4: 0.000011319,
    C5: 2,
    minimumTemperature: 167.62,
    maximumTemperature: 428.6,
    pressureAtMinimumTemperature: 7.45e1,
    pressureAtMaximumTemperature: 4.1e6,
  },

  Butylacetate: {
    name: 'Butyl acetate',
    formula: 'C6H12O2',
    CAS: '123-86-4',
    C1: 122.82,
    C2: -9253.2,
    C3: -14.99,
    C4: 0.00001047,
    C5: 2,
    minimumTemperature: 199.65,
    maximumTemperature: 575.4,
    pressureAtMinimumTemperature: 8.17e-2,
    pressureAtMaximumTemperature: 3.087e6,
  },

  Butylbenzene: {
    name: 'Butylbenzene',
    formula: 'C10H14',
    CAS: '104-51-8',
    C1: 101.22,
    C2: -9255.4,
    C3: -11.538,
    C4: 5.9208e-6,
    C5: 2,
    minimumTemperature: 185.3,
    maximumTemperature: 660.5,
    pressureAtMinimumTemperature: 1.54e-4,
    pressureAtMaximumTemperature: 2.882e6,
  },

  ButylMercaptan: {
    name: 'Butyl mercaptan',
    formula: 'C4H10S',
    CAS: '109-79-5',
    C1: 65.382,
    C2: -6262.4,
    C3: -6.2585,
    C4: 1.49e-17,
    C5: 6,
    minimumTemperature: 157.46,
    maximumTemperature: 570.1,
    pressureAtMinimumTemperature: 2.35e-3,
    pressureAtMaximumTemperature: 3.973e6,
  },

  secButylMercaptan: {
    name: 'sec-Butyl mercaptan',
    formula: 'C4H10S',
    CAS: '513-53-1',
    C1: 60.649,
    C2: -5785.9,
    C3: -5.6113,
    C4: 1.59e-17,
    C5: 6,
    minimumTemperature: 133.02,
    maximumTemperature: 554,
    pressureAtMinimumTemperature: 3.4e-5,
    pressureAtMaximumTemperature: 4.06e6,
  },

  IButyne: {
    name: 'I-Butyne',
    formula: 'C4H6',
    CAS: '107-00-6',
    C1: 77.004,
    C2: -5054.5,
    C3: -8.5665,
    C4: 0.000010161,
    C5: 2,
    minimumTemperature: 147.43,
    maximumTemperature: 440,
    pressureAtMinimumTemperature: 1.18,
    pressureAtMaximumTemperature: 4.599e6,
  },

  Butyraldehyde: {
    name: 'Butyraldehyde',
    formula: 'C4H8O',
    CAS: '123-72-8',
    C1: 51.648,
    C2: -5301.36,
    C3: -4.2559,
    C4: 1.14e-17,
    C5: 6,
    minimumTemperature: 176.8,
    maximumTemperature: 537.2,
    pressureAtMinimumTemperature: 6.97e-1,
    pressureAtMaximumTemperature: 4.41e6,
  },

  ButyricAcid: {
    name: 'Butyric acid',
    formula: 'C4H8O2',
    CAS: '107-92-6',
    C1: 78.1171,
    C2: -8924.37,
    C3: -7.59929,
    C4: 7.39e-18,
    C5: 6,
    minimumTemperature: 267.95,
    maximumTemperature: 615.7,
    pressureAtMinimumTemperature: 1.03e1,
    pressureAtMaximumTemperature: 4.06e6,
  },

  Butyronitrile: {
    name: 'Butyronitrile',
    formula: 'C4H7N',
    CAS: '109-74-0',
    C1: 60.6576,
    C2: -6404.32,
    C3: -5.49286,
    C4: 1.13e-17,
    C5: 6,
    minimumTemperature: 161.3,
    maximumTemperature: 585.4,
    pressureAtMinimumTemperature: 9.41e-4,
    pressureAtMaximumTemperature: 3.88e6,
  },

  CarbonDioxide: {
    name: 'Carbon dioxide',
    formula: 'C02',
    CAS: '124-38-9',
    C1: 47.0169,
    C2: -2839,
    C3: -3.86388,
    C4: 2.81e-16,
    C5: 6,
    minimumTemperature: 216.58,
    maximumTemperature: 304.21,
    pressureAtMinimumTemperature: 5.18e5,
    pressureAtMaximumTemperature: 7.384e6,
  },

  CarbonDisulphide: {
    name: 'Carbon disulphide',
    formula: 'CS2',
    CAS: '75-15-0.',
    C1: 67.114,
    C2: -4820.4,
    C3: -7.5303,
    C4: 0.0091695,
    C5: 1,
    minimumTemperature: 161.11,
    maximumTemperature: 552,
    pressureAtMinimumTemperature: 1.49,
    pressureAtMaximumTemperature: 8.041e6,
  },

  CarbonMonoxide: {
    name: 'Carbon monoxide',
    formula: 'CO',
    CAS: '630-08-0',
    C1: 45.698,
    C2: -1076.6,
    C3: -4.8814,
    C4: 0.000075673,
    C5: 2,
    minimumTemperature: 68.15,
    maximumTemperature: 132.92,
    pressureAtMinimumTemperature: 1.54e4,
    pressureAtMaximumTemperature: 3.494e6,
  },

  CarbonTetrachloride: {
    name: 'Carbon tetrachloride',
    formula: 'CCl4',
    CAS: '56-23-5',
    C1: 78.441,
    C2: -6128.1,
    C3: -8.5766,
    C4: 6.8465e-6,
    C5: 2,
    minimumTemperature: 250.33,
    maximumTemperature: 556.35,
    pressureAtMinimumTemperature: 1.12e3,
    pressureAtMaximumTemperature: 4.544e6,
  },

  CarbonTetrafluoride: {
    name: 'Carbon tetraflouride',
    formula: 'CF4',
    CAS: '75-73-0',
    C1: 61.89,
    C2: -2296.3,
    C3: -7.086,
    C4: 0.000034687,
    C5: 2,
    minimumTemperature: 89.56,
    maximumTemperature: 227.51,
    pressureAtMinimumTemperature: 1.08e2,
    pressureAtMaximumTemperature: 3.742e6,
  },

  Chlorine: {
    name: 'Chlorine',
    formula: 'Cl2',
    CAS: '7782-50-5',
    C1: 71.334,
    C2: -3855,
    C3: -8.5171,
    C4: 0.012378,
    C5: 1,
    minimumTemperature: 172.12,
    maximumTemperature: 417.15,
    pressureAtMinimumTemperature: 1.37e3,
    pressureAtMaximumTemperature: 7.793e6,
  },

  Chlorobenzene: {
    name: 'Chlorobenzene',
    formula: 'C6H5Cl',
    CAS: '108-90-5',
    C1: 54.144,
    C2: -6244.4,
    C3: -4.5343,
    C4: 4.7e-18,
    C5: 6,
    minimumTemperature: 227.95,
    maximumTemperature: 632.35,
    pressureAtMinimumTemperature: 8.45,
    pressureAtMaximumTemperature: 4.529e6,
  },

  Chloroethane: {
    name: 'Chloroethane',
    formula: 'C2H5Cl',
    CAS: '75-00-3',
    C1: 44.677,
    C2: -4026,
    C3: -3.371,
    C4: 2.27e-17,
    C5: 6,
    minimumTemperature: 136.75,
    maximumTemperature: 460.35,
    pressureAtMinimumTemperature: 2.61e-1,
    pressureAtMaximumTemperature: 5.267e6,
  },

  Chloroform: {
    name: 'Chloroform',
    formula: 'CHCl3',
    CAS: '67-66-3',
    C1: 146.43,
    C2: -7792.3,
    C3: -20.614,
    C4: 0.024578,
    C5: 1,
    minimumTemperature: 207.15,
    maximumTemperature: 536.4,
    pressureAtMinimumTemperature: 5.25e1,
    pressureAtMaximumTemperature: 5.554e6,
  },

  Chloromethane: {
    name: 'Chloromethane',
    formula: 'CH3Cl',
    CAS: '74-87-3',
    C1: 44.555,
    C2: -3521.3,
    C3: -3.4258,
    C4: 5.63e-17,
    C5: 6,
    minimumTemperature: 175.45,
    maximumTemperature: 416.25,
    pressureAtMinimumTemperature: 8.84e2,
    pressureAtMaximumTemperature: 6.759e6,
  },

  '1Chloropropane': {
    name: '1-Chloropropane',
    formula: 'C3H7Cl',
    CAS: '540-54-5',
    C1: 58.3592,
    C2: -5111.33,
    C3: -5.35261,
    C4: 2.47e-17,
    C5: 6,
    minimumTemperature: 150.35,
    maximumTemperature: 503.15,
    pressureAtMinimumTemperature: 8.47e-2,
    pressureAtMaximumTemperature: 4.425e6,
  },

  '2Chloropropane': {
    name: '2-Chloropropane',
    formula: 'C3H7Cl',
    CAS: '75-29-6',
    C1: 46.854,
    C2: -4445.5,
    C3: -3.6533,
    C4: 1.33e-17,
    C5: 6,
    minimumTemperature: 155.97,
    maximumTemperature: 489,
    pressureAtMinimumTemperature: 9.08e-1,
    pressureAtMaximumTemperature: 4.51e6,
  },

  mCresol: {
    name: 'm-Cresol',
    formula: 'C7H8O',
    CAS: '108-39-4',
    C1: 95.403,
    C2: -10581,
    C3: -10.004,
    C4: 4.3e-18,
    C5: 6,
    minimumTemperature: 285.39,
    maximumTemperature: 705.85,
    pressureAtMinimumTemperature: 5.86,
    pressureAtMaximumTemperature: 4.522e6,
  },

  oCresol: {
    name: 'o-Cresol',
    formula: 'C7H8O',
    CAS: '95-48-7',
    C1: 210.88,
    C2: -13928,
    C3: -29.483,
    C4: 0.025182,
    C5: 1,
    minimumTemperature: 304.19,
    maximumTemperature: 697.55,
    pressureAtMinimumTemperature: 6.53e1,
    pressureAtMaximumTemperature: 5.058e6,
  },

  pCresol: {
    name: 'p-Cresol',
    formula: 'C7H8O',
    CAS: '106-44-5',
    C1: 118.53,
    C2: -11957,
    C3: -13.293,
    C4: 8.7e-18,
    C5: 6,
    minimumTemperature: 307.93,
    maximumTemperature: 704.65,
    pressureAtMinimumTemperature: 3.45e1,
    pressureAtMaximumTemperature: 5.151e6,
  },

  Cumene: {
    name: 'Cumene',
    formula: 'C9H12',
    CAS: '98-82-8',
    C1: 102.81,
    C2: -8674.6,
    C3: -11.922,
    C4: 7.0048e-6,
    C5: 2,
    minimumTemperature: 177.14,
    maximumTemperature: 631,
    pressureAtMinimumTemperature: 4.71e-4,
    pressureAtMaximumTemperature: 3.226e6,
  },

  Cyanogen: {
    name: 'Cyanogen',
    formula: 'C2N2',
    CAS: '460-19-5',
    C1: 39.0596,
    C2: -3473.98,
    C3: -2.48683,
    C4: 2.86e-17,
    C5: 6,
    minimumTemperature: 245.25,
    maximumTemperature: 400.15,
    pressureAtMinimumTemperature: 7.44e4,
    pressureAtMaximumTemperature: 5.924e6,
  },

  Cyclobutane: {
    name: 'Cyclobutane',
    formula: 'C4H8',
    CAS: '287-23-0',
    C1: 85.899,
    C2: -4884.4,
    C3: -10.883,
    C4: 0.014934,
    C5: 1,
    minimumTemperature: 182.48,
    maximumTemperature: 459.93,
    pressureAtMinimumTemperature: 1.8e2,
    pressureAtMaximumTemperature: 4.991e6,
  },

  Cyclohexane: {
    name: 'Cyclohexane',
    formula: 'C6H12',
    CAS: '110-82-7',
    C1: 51.087,
    C2: -5226.4,
    C3: -4.2278,
    C4: 9.76e-18,
    C5: 6,
    minimumTemperature: 279.69,
    maximumTemperature: 553.8,
    pressureAtMinimumTemperature: 5.36e3,
    pressureAtMaximumTemperature: 4.093e6,
  },

  Cyclohexanol: {
    name: 'Cyclohexanol',
    formula: 'C6H12O',
    CAS: '108-93-0',
    C1: 189.19,
    C2: -14337,
    C3: -24.148,
    C4: 0.00001074,
    C5: 2,
    minimumTemperature: 296.6,
    maximumTemperature: 650.1,
    pressureAtMinimumTemperature: 7.65e1,
    pressureAtMaximumTemperature: 4.265e6,
  },

  Cyclohexanone: {
    name: 'Cyclohexanone',
    formula: 'C6H10O',
    CAS: '108-94-1',
    C1: 85.424,
    C2: -7944.4,
    C3: -9.2862,
    C4: 4.9957e-6,
    C5: 2,
    minimumTemperature: 242,
    maximumTemperature: 653,
    pressureAtMinimumTemperature: 6.8,
    pressureAtMaximumTemperature: 3.989e6,
  },

  Cyclohexene: {
    name: 'Cyclohexene',
    formula: 'C6H10',
    CAS: '110-83-8',
    C1: 88.184,
    C2: -6624.9,
    C3: -10.059,
    C4: 8.2566e-6,
    C5: 2,
    minimumTemperature: 169.67,
    maximumTemperature: 560.4,
    pressureAtMinimumTemperature: 1.04e-1,
    pressureAtMaximumTemperature: 4.392e6,
  },

  Cyclopentane: {
    name: 'Cyclopentane',
    formula: 'C5H10',
    CAS: '287-92-3',
    C1: 66.341,
    C2: -5198.5,
    C3: -6.8103,
    C4: 0.000006193,
    C5: 2,
    minimumTemperature: 179.28,
    maximumTemperature: 511.7,
    pressureAtMinimumTemperature: 9.07,
    pressureAtMaximumTemperature: 4.513e6,
  },

  Cyclopentene: {
    name: 'Cyclopentene',
    formula: 'C5H8',
    CAS: '142-29-0',
    C1: 67.952,
    C2: -5187.5,
    C3: -7.0785,
    C4: 6.8165e-6,
    C5: 2,
    minimumTemperature: 138.13,
    maximumTemperature: 507,
    pressureAtMinimumTemperature: 1.28e-2,
    pressureAtMaximumTemperature: 4.799e6,
  },

  Cyclopropane: {
    name: 'Cyclopropane',
    formula: 'C3H6',
    CAS: '75-19-4',
    C1: 40.608,
    C2: -3179.6,
    C3: -2.8937,
    C4: 5.61e-17,
    C5: 6,
    minimumTemperature: 145.59,
    maximumTemperature: 398,
    pressureAtMinimumTemperature: 7.8e1,
    pressureAtMaximumTemperature: 5.494e6,
  },

  CyclohexylMercaptan: {
    name: 'Cyclohexyl mercaptan',
    formula: 'C6H12S',
    CAS: '1569-69-3',
    C1: 85.146,
    C2: -7843.7,
    C3: -9.2982,
    C4: 5.1788e-6,
    C5: 2,
    minimumTemperature: 189.64,
    maximumTemperature: 664,
    pressureAtMinimumTemperature: 8.24e-3,
    pressureAtMaximumTemperature: 3.97e6,
  },

  Decanal: {
    name: 'Decanal',
    formula: 'C10H20O',
    CAS: '112-31-2',
    C1: 93.5742,
    C2: -10403.8,
    C3: -9.79483,
    C4: 4.57e-18,
    C5: 6,
    minimumTemperature: 285,
    maximumTemperature: 674,
    pressureAtMinimumTemperature: 5.51,
    pressureAtMaximumTemperature: 2.6e6,
  },

  Decane: {
    name: 'Decane',
    formula: 'C10H22',
    CAS: '124-18-5',
    C1: 112.73,
    C2: -9749.6,
    C3: -13.245,
    C4: 7.1266e-6,
    C5: 2,
    minimumTemperature: 243.51,
    maximumTemperature: 617.7,
    pressureAtMinimumTemperature: 1.39,
    pressureAtMaximumTemperature: 2.091e6,
  },

  DecanoicAcid: {
    name: 'Decanoic acid',
    formula: 'C10H20O2',
    CAS: '334-48-5',
    C1: 126.405,
    C2: -14864.6,
    C3: -13.9067,
    C4: 2.51e-18,
    C5: 6,
    minimumTemperature: 304.55,
    maximumTemperature: 722.1,
    pressureAtMinimumTemperature: 1.45e-1,
    pressureAtMaximumTemperature: 2.28e6,
  },

  '1Decanol': {
    name: '1-Decanol',
    formula: 'C10H22O',
    CAS: '112-30-1',
    C1: 156.23933,
    C2: -15212.33492,
    C3: -18.42393,
    C4: 8.5e-18,
    C5: 6,
    minimumTemperature: 280.05,
    maximumTemperature: 688,
    pressureAtMinimumTemperature: 1.5e-1,
    pressureAtMaximumTemperature: 2.308e6,
  },

  '1Decene': {
    name: '1-Decene',
    formula: 'C10H20',
    CAS: '872-05-9',
    C1: 68.401,
    C2: -7776.9,
    C3: -6.4637,
    C4: 6.38e-18,
    C5: 6,
    minimumTemperature: 206.89,
    maximumTemperature: 616.6,
    pressureAtMinimumTemperature: 2.59e-2,
    pressureAtMaximumTemperature: 2.223e6,
  },

  DecylMercaptan: {
    name: 'Decyl mercaptan',
    formula: 'C10H22S',
    CAS: '143-10-2',
    C1: 91.91,
    C2: -10565,
    C3: -9.5957,
    C4: 5.7e-18,
    C5: 6,
    minimumTemperature: 247.56,
    maximumTemperature: 696,
    pressureAtMinimumTemperature: 2.59e-2,
    pressureAtMaximumTemperature: 2.13e6,
  },

  '1Decyne': {
    name: '1-Decyne',
    formula: 'C10H18',
    CAS: '764-93-2',
    C1: 142.94,
    C2: -11119,
    C3: -17.818,
    C4: 0.00001102,
    C5: 2,
    minimumTemperature: 229.15,
    maximumTemperature: 619.85,
    pressureAtMinimumTemperature: 1.6e-1,
    pressureAtMaximumTemperature: 2.363e6,
  },

  Deuterium: {
    name: 'Deuterium',
    formula: 'D2',
    CAS: '7782-39-0',
    C1: 18.947,
    C2: -154.47,
    C3: -0.57226,
    C4: 0.038899,
    C5: 1,
    minimumTemperature: 18.73,
    maximumTemperature: 38.35,
    pressureAtMinimumTemperature: 1.72e4,
    pressureAtMaximumTemperature: 1.663e6,
  },

  '1,1Dibromoethane': {
    name: '1,1-Dibromoethane',
    formula: 'C2H4Br2',
    CAS: '557-91-5',
    C1: 62.711,
    C2: -6503.5,
    C3: -5.7669,
    C4: 1.0427e-6,
    C5: 2,
    minimumTemperature: 210.15,
    maximumTemperature: 628,
    pressureAtMinimumTemperature: 2.64,
    pressureAtMaximumTemperature: 6.034e6,
  },

  '1,2Dibromoethane': {
    name: '1,2-Dibromoethane',
    formula: 'C2H4Br2',
    CAS: '106-93-4',
    C1: 43.751,
    C2: -5587.7,
    C3: -3.0891,
    C4: 8.2664e-7,
    C5: 2,
    minimumTemperature: 282.85,
    maximumTemperature: 650.15,
    pressureAtMinimumTemperature: 7.53e2,
    pressureAtMaximumTemperature: 5.375e6,
  },

  Dibromomethane: {
    name: 'Dibromo methane',
    formula: 'CH2Br2',
    CAS: '74-95-3',
    C1: 86.295,
    C2: -7010.3,
    C3: -9.5972,
    C4: 6.7794e-6,
    C5: 2,
    minimumTemperature: 220.6,
    maximumTemperature: 611,
    pressureAtMinimumTemperature: 2.13e1,
    pressureAtMaximumTemperature: 7.17e6,
  },

  DibutylEther: {
    name: 'Dibutyl ether',
    formula: 'C8H18O',
    CAS: '142-96-1',
    C1: 72.227,
    C2: -7537.6,
    C3: -7.0596,
    C4: 9.14e-18,
    C5: 6,
    minimumTemperature: 175.3,
    maximumTemperature: 584.1,
    pressureAtMinimumTemperature: 7.14e-4,
    pressureAtMaximumTemperature: 2.459e6,
  },

  mDichlorobenzene: {
    name: 'm-Dichlorobenzene',
    formula: 'C6H4Cl2',
    CAS: '541-73-1',
    C1: 53.187,
    C2: -6827.5,
    C3: -4.3233,
    C4: 2.31e-18,
    C5: 6,
    minimumTemperature: 248.39,
    maximumTemperature: 683.95,
    pressureAtMinimumTemperature: 6.41,
    pressureAtMaximumTemperature: 4.07e6,
  },

  oDichlorobenzene: {
    name: 'o-Dichlorobenzene',
    formula: 'C6H4Cl2',
    CAS: '95-50-1',
    C1: 77.105,
    C2: -8111.1,
    C3: -7.8886,
    C4: 2.7267e-6,
    C5: 2,
    minimumTemperature: 256.15,
    maximumTemperature: 705,
    pressureAtMinimumTemperature: 6.49,
    pressureAtMaximumTemperature: 4.074e6,
  },

  pDichlorobenzene: {
    name: 'p-Dichlorobenzene',
    formula: 'C6H4Cl2',
    CAS: '106-46-7',
    C1: 88.31,
    C2: -8463.4,
    C3: -9.6308,
    C4: 4.5833e-6,
    C5: 2,
    minimumTemperature: 326.14,
    maximumTemperature: 684.75,
    pressureAtMinimumTemperature: 1.23e3,
    pressureAtMaximumTemperature: 4.07e6,
  },

  '1,1Dichloroethane': {
    name: '1,1-Dichloroethane',
    formula: 'C2H4Cl2',
    CAS: '75-34-3',
    C1: 66.611,
    C2: -5493.1,
    C3: -6.7301,
    C4: 5.3579e-6,
    C5: 2,
    minimumTemperature: 176.19,
    maximumTemperature: 523,
    pressureAtMinimumTemperature: 2.21,
    pressureAtMaximumTemperature: 5.106e6,
  },

  '1,2Dichloroethane': {
    name: '1,2-Dichloroethane',
    formula: 'C2H4Cl2',
    CAS: '107-06-2',
    C1: 92.355,
    C2: -6920.4,
    C3: -10.651,
    C4: 9.1426e-6,
    C5: 2,
    minimumTemperature: 237.49,
    maximumTemperature: 561.6,
    pressureAtMinimumTemperature: 2.37e2,
    pressureAtMaximumTemperature: 5.318e6,
  },

  Dichloromethane: {
    name: 'Dichloromethane',
    formula: 'CH2Cl2',
    CAS: '75-09-2',
    C1: 101.6,
    C2: -6541.6,
    C3: -12.247,
    C4: 0.000012311,
    C5: 2,
    minimumTemperature: 178.01,
    maximumTemperature: 510,
    pressureAtMinimumTemperature: 5.93,
    pressureAtMaximumTemperature: 6.093e6,
  },

  '1,1-Dichloropropane': {
    name: '1,1-Dichloropropane',
    formula: 'C3H6Cl2',
    CAS: '78-99-9',
    C1: 83.495,
    C2: -6661.4,
    C3: -9.2386,
    C4: 6.7652e-6,
    C5: 2,
    minimumTemperature: 192.5,
    maximumTemperature: 560,
    pressureAtMinimumTemperature: 1.72,
    pressureAtMaximumTemperature: 4.239e6,
  },

  DiethanolAmine: {
    name: 'Diethanol amine',
    formula: 'C4H11NO2',
    CAS: '111-42-2',
    C1: 106.38,
    C2: -13714,
    C3: -11.06,
    C4: 3.26e-18,
    C5: 6,
    minimumTemperature: 301.15,
    maximumTemperature: 736.6,
    pressureAtMinimumTemperature: 1.02e-1,
    pressureAtMaximumTemperature: 4.26e6,
  },

  DiethylAmine: {
    name: 'Diethyl amine',
    formula: 'C4H11N',
    CAS: '109-89-7',
    C1: 49.314,
    C2: -4949,
    C3: -3.9256,
    C4: 9.2e-18,
    C5: 6,
    minimumTemperature: 223.35,
    maximumTemperature: 496.6,
    pressureAtMinimumTemperature: 3.74e2,
    pressureAtMaximumTemperature: 3.674e6,
  },

  DiethylEther: {
    name: 'Diethyl ether',
    formula: 'C4H10O',
    CAS: '60-29-7',
    C1: 136.9,
    C2: -6954.3,
    C3: -19.254,
    C4: 0.024508,
    C5: 1,
    minimumTemperature: 156.85,
    maximumTemperature: 466.7,
    pressureAtMinimumTemperature: 3.95e-1,
    pressureAtMaximumTemperature: 3.641e6,
  },

  DiethylSulphide: {
    name: 'Diethyl sulphide',
    formula: 'C4H10S',
    CAS: '352-93-2',
    C1: 46.705,
    C2: -5177.4,
    C3: -3.5985,
    C4: 107147e-6,
    C5: 2,
    minimumTemperature: 169.2,
    maximumTemperature: 557.15,
    pressureAtMinimumTemperature: 9.93e-2,
    pressureAtMaximumTemperature: 3.961e6,
  },

  '1,1Difluoroethane': {
    name: '1,1-Difluoroethane',
    formula: 'C2H4F2',
    CAS: '75-37-6',
    C1: 73.491,
    C2: -4385.9,
    C3: -8.1851,
    C4: 0.000012978,
    C5: 2,
    minimumTemperature: 154.56,
    maximumTemperature: 386.44,
    pressureAtMinimumTemperature: 6.45e1,
    pressureAtMaximumTemperature: 4.507e6,
  },

  '1,2Difluoroethane': {
    name: '1,2-Difluoroethane',
    formula: 'C2H4F2',
    CAS: '624-72-6',
    C1: 84.625,
    C2: -5217.4,
    C3: -9.871,
    C4: 0.00001305,
    C5: 2,
    minimumTemperature: 179.6,
    maximumTemperature: 445,
    pressureAtMinimumTemperature: 1.17e2,
    pressureAtMaximumTemperature: 4.372e6,
  },

  Difluoromethane: {
    name: 'Difluoro amine',
    formula: 'CH2F2',
    CAS: '75-10-5',
    C1: 69.132,
    C2: -3847.7,
    C3: -7.5868,
    C4: 0.000015065,
    C5: 2,
    minimumTemperature: 136.95,
    maximumTemperature: 351.26,
    pressureAtMinimumTemperature: 5.43e1,
    pressureAtMaximumTemperature: 5.761e6,
  },

  DisopropylAmine: {
    name: 'Disopropyl amine',
    formula: 'C6H15N',
    CAS: '108-18-9',
    C1: 462.84,
    C2: -18227,
    C3: -73.734,
    C4: 0.092794,
    C5: 1,
    minimumTemperature: 176.85,
    maximumTemperature: 523.1,
    pressureAtMinimumTemperature: 4.47e-3,
    pressureAtMaximumTemperature: 3.199e6,
  },
} as const;

export function calculateDIPPRVaporPressure(
  compound: string,
  temperature: number
): number {
  const vaporPressureProps: DIPPRVaporPressureProps | undefined =
    DIPPRVaporPressureDictionary[compound];
  let vaporPressure = NaN;
  if (
    vaporPressureProps !== undefined &&
    temperature >= vaporPressureProps.minimumTemperature &&
    temperature <= vaporPressureProps.maximumTemperature
  ) {
    vaporPressure = Math.exp(
      vaporPressureProps.C1 +
        vaporPressureProps.C2 / temperature +
        vaporPressureProps.C3 * Math.log(temperature) +
        vaporPressureProps.C4 * Math.pow(temperature, vaporPressureProps.C5)
    );
  }
  return vaporPressure;
}
