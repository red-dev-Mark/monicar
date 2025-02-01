import { VehicleInfoModel } from '@/types/vehicle'

export const normalizeCoordinate = (coordinateValue: number): number => coordinateValue / 1000000
export const denormalizeCoordinate = (coordinateValue: number): number => Math.round(coordinateValue * 1000000)

export const normalizeVehicleResponse = (data: VehicleInfoModel) => {
    return {
        ...data,
        recentCycleInfo: {
            ...data.recentCycleInfo,
            lat: normalizeCoordinate(data.recentCycleInfo.lat),
            lng: normalizeCoordinate(data.recentCycleInfo.lng),
        },
    }
}

export const getNormalizedZoomLevel = (level: number) => (level % 2 === 0 ? level - 1 : level)
