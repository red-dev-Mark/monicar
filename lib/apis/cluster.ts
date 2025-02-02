import { httpClient } from '@/lib/apis/client'
import { denormalizeCoordinate, getNormalizedZoomLevel, normalizeClusterResponse } from '@/lib/utils/normalize'
import { ClusterPoint, MapState } from '@/types/map'

export const clusterService = {
    // 뷰포트 영역 내 클러스터링 정보 조회

    getClusterInfo: async ({ level, swCoord, neCoord }: MapState): Promise<ClusterPoint[]> => {
        if (!level || !swCoord || !neCoord) return []

        const params = {
            level: getNormalizedZoomLevel(level),
            swLat: denormalizeCoordinate(swCoord.lat),
            swLng: denormalizeCoordinate(swCoord.lng),
            neLat: denormalizeCoordinate(neCoord.lat),
            neLng: denormalizeCoordinate(neCoord.lng),
        }

        const response = await httpClient.get(`api/v1/vehicle/cluster`, {
            params,
        })

        const normalizedClusterInfo = normalizeClusterResponse(response.data.result).filter(
            (cluster) => cluster.count > 10, // TODO: 10 매직넘버 처리
        )

        return normalizedClusterInfo
    },

    // 뷰포트 영역 내 클러스터링 정보(count)가 10 미만일 경우 전체 차량 정보 조회
    getClusterDetailInfo: async ({ level, swCoord, neCoord }: MapState) => {
        if (!level || level > 9 || !swCoord || !neCoord) return

        const params = {
            level: getNormalizedZoomLevel(level),
            swLat: denormalizeCoordinate(swCoord.lat),
            swLng: denormalizeCoordinate(swCoord.lng),
            neLat: denormalizeCoordinate(neCoord.lat),
            neLng: denormalizeCoordinate(neCoord.lng),
        }

        const response = await httpClient.get(`api/v1/vehicle/cluster/details`, {
            params,
        })

        const normalizedClusterInfo = normalizeClusterResponse(response.data.result)

        return normalizedClusterInfo
    },
}
