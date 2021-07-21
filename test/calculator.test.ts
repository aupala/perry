import {
  calculateDIPPRVaporPressure,
  DIPPRVaporPressureDictionary,
} from '../src/data/vapor-pressure-constants';
import {
  calculateDIPPRDensity,
  DIPPRDensityDictionary,
} from '../src/data/density-constants';

describe('calculateDIPPRVaporPressure', () => {
  it('should return NaN outside the specified range of temperature', () => {
    const vaporProps = DIPPRVaporPressureDictionary['Acetaldehyde'];
    expect(
      calculateDIPPRVaporPressure(
        'Acetaldehyde',
        vaporProps.minimumTemperature - 1
      )
    ).toBe(NaN);
    expect(
      calculateDIPPRVaporPressure(
        'Acetaldehyde',
        vaporProps.maximumTemperature + 1
      )
    ).toBe(NaN);
  });

  it('should return correct vapor pressure at Tmin and Tmax', () => {
    const vaporProps = DIPPRVaporPressureDictionary['Acetaldehyde'];
    expect(
      calculateDIPPRVaporPressure(
        'Acetaldehyde',
        vaporProps.minimumTemperature
      ).toPrecision(3)
    ).toBe(vaporProps.pressureAtMinimumTemperature.toPrecision(3));
    expect(
      calculateDIPPRVaporPressure(
        'Acetaldehyde',
        vaporProps.maximumTemperature
      ).toPrecision(3)
    ).toBe(vaporProps.pressureAtMaximumTemperature.toPrecision(3));
  });
});

describe('calculateDIPPRDensity', () => {
  it('should return NaN outside the specified range of temperature', () => {
    const densityProps = DIPPRDensityDictionary['Acetaldehyde'];
    expect(
      calculateDIPPRDensity('Acetaldehyde', densityProps.minimumTemperature - 1)
    ).toBe(NaN);
    expect(
      calculateDIPPRDensity('Acetaldehyde', densityProps.maximumTemperature + 1)
    ).toBe(NaN);
  });

  it('should return correct density at Tmin and Tmax', () => {
    const densityProps = DIPPRDensityDictionary['Acetaldehyde'];
    expect(
      calculateDIPPRDensity('Acetaldehyde', densityProps.minimumTemperature)
    ).toBeCloseTo(densityProps.densityAtMinimumTemperature, 3);
    expect(
      calculateDIPPRDensity('Acetaldehyde', densityProps.maximumTemperature)
    ).toBeCloseTo(densityProps.densityAtMaximumTemperature, 3);
  });

  it('should return NaN outside the specified range of temperature for water', () => {
    const densityProps = DIPPRDensityDictionary['Water'];
    const densityPropsExtended = DIPPRDensityDictionary['WaterExtended'];
    expect(
      calculateDIPPRDensity(
        'Water',
        Math.min(
          densityProps.minimumTemperature,
          densityPropsExtended.minimumTemperature
        ) - 1
      )
    ).toBe(NaN);
    expect(
      calculateDIPPRDensity(
        'Water',
        Math.max(
          densityProps.maximumTemperature,
          densityPropsExtended.maximumTemperature
        ) + 1
      )
    ).toBe(NaN);
  });

  it('should return correct density at Tmin and Tmax for water', () => {
    const densityProps = DIPPRDensityDictionary['Water'];
    const densityPropsExtended = DIPPRDensityDictionary['WaterExtended'];
    expect(
      calculateDIPPRDensity('Water', densityProps.minimumTemperature)
    ).toBeCloseTo(densityProps.densityAtMinimumTemperature, 3);
    expect(
      calculateDIPPRDensity('Water', densityPropsExtended.maximumTemperature)
    ).toBeCloseTo(densityPropsExtended.densityAtMaximumTemperature, 3);
  });

  it('should return NaN outside the specified range of temperature for o-terphenyl', () => {
    const densityProps = DIPPRDensityDictionary['oTerphenyl'];
    const densityPropsExtended = DIPPRDensityDictionary['oTerphenylExtended'];
    expect(
      calculateDIPPRDensity(
        'oTerphenyl',
        Math.min(
          densityProps.minimumTemperature,
          densityPropsExtended.minimumTemperature
        ) - 1
      )
    ).toBe(NaN);
    expect(
      calculateDIPPRDensity(
        'oTerphenyl',
        Math.max(
          densityProps.maximumTemperature,
          densityPropsExtended.maximumTemperature
        ) + 1
      )
    ).toBe(NaN);
  });

  it('should return correct density at Tmin and Tmax for o-terphenyl', () => {
    const densityProps = DIPPRDensityDictionary['oTerphenyl'];
    const densityPropsExtended = DIPPRDensityDictionary['oTerphenylExtended'];
    expect(
      calculateDIPPRDensity('oTerphenyl', densityProps.minimumTemperature)
    ).toBeCloseTo(densityProps.densityAtMinimumTemperature, 3);
    expect(
      calculateDIPPRDensity(
        'oTerphenyl',
        densityPropsExtended.maximumTemperature
      )
    ).toBeCloseTo(densityPropsExtended.densityAtMaximumTemperature, 3);
  });
});
