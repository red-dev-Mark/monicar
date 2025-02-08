import { httpClient } from '@/lib/apis/client'
import { denormalizeCoordinate, normalizeCoordinate } from '@/lib/utils/normalize'
import { ClusterInfoModel, MapState } from '@/types/map'
import { VehicleInfoModel } from '@/types/vehicle'

export const clusterService = {
    // 지도 뷰포트 내 차량 클러스터 정보 조회
    getClusterInfo: async ({ level, swCoord, neCoord }: MapState): Promise<ClusterInfoModel[] | null> => {
        if (!level || !swCoord || !neCoord) return null

        const params = {
            zoomLevel: level,
            swLat: denormalizeCoordinate(swCoord.lat),
            swLng: denormalizeCoordinate(swCoord.lng),
            neLat: denormalizeCoordinate(neCoord.lat),
            neLng: denormalizeCoordinate(neCoord.lng),
        }

        const response = await httpClient.get(`api/v1/vehicle/clusters`, {
            params,
        })

        const { result } = response.data

        return result.map((clusterInfo: ClusterInfoModel) => {
            return {
                ...clusterInfo,
                lat: normalizeCoordinate(clusterInfo.lat),
                lng: normalizeCoordinate(clusterInfo.lng),
            }
        })
    },

    // 상세 줌레벨(4 이하)에서 뷰포트 내 개별 차량 정보 조회
    getVehicleDetails: async ({ level, swCoord, neCoord }: MapState): Promise<VehicleInfoModel | null> => {
        if (!level || !swCoord || !neCoord) return null

        const params = {
            zoomLevel: level,
            swLat: denormalizeCoordinate(swCoord.lat),
            swLng: denormalizeCoordinate(swCoord.lng),
            neLat: denormalizeCoordinate(neCoord.lat),
            neLng: denormalizeCoordinate(neCoord.lng),
        }

        const response = await httpClient.get(`api/v1/vehicle/cluster/details`, {
            params,
        })

        const { result } = response.data

        return {
            vehicleId: result.vehicleId ?? null,
            vehicleNumber: result.vehicleNumber ?? null,
            coordinate: {
                lat: response.data.result.lat ?? null,
                lng: response.data.result.lng ?? null,
            },
        }
    },
}
