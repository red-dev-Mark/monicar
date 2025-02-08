export const normalizeCoordinate = (coordinateValue: number): number => coordinateValue / 1000000
export const denormalizeCoordinate = (coordinateValue: number): number => Math.round(coordinateValue * 1000000)
