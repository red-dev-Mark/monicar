import { httpClient } from '@/lib/apis/client'
import { denormalizeCoordinate } from '@/lib/utils/normalize'
import { MapState } from '@/types/map'

export const clusterService = {
    // 뷰포트 영역 내 클러스터링 정보 조회
    // getClusteringInfo: async () => {
    // {
    //     // 줌레벨: 미터단위
    //     1: 20000,   // 전국 단위
    //     3: 15000,   // 도 단위
    //     5: 10000,   // 시 단위
    //     7: 5000,    // 구 단위
    //     9: 2000,    // 동 단위
    //     11: 1000,   // 상세 지역
    //     13: 500,    // 매우 상세
    //     14: 200     // 최대 줌
    //   };
    getClusteringInfo: async ({ level, swCoord, neCoord }: MapState) => {
        if (!level || !swCoord || !neCoord) return

        const params = {
            level,
            swLat: denormalizeCoordinate(swCoord.lat),
            swLng: denormalizeCoordinate(swCoord.lng),
            neLat: denormalizeCoordinate(neCoord.lat),
            neLng: denormalizeCoordinate(neCoord.lng),
        }
        console.log(params)
        const response = await httpClient.get(`api/v1/vehicle/cluster`, {
            params,
        })

        // const response = await httpClient.get(`api/v1/vehicle/cluster`, {
        //     params: {
        //         level: 9,
        //         neLat: 38650929,
        //         neLng: 132286492,
        //         swLat: 35519341,
        //         swLng: 124703415,
        //     },
        // })

        console.log(response.data.result)
    },
    // 뷰포트 영역 내 클러스터링 정보(count)가 10 미만일 경우 전체 차량 정보 조회
    getClusteringDetailInfo: async () => {
        // getClusteringDetailInfo: async ({ level, swCoord, neCoord }: MapState) => {
        // if (!level || !swCoord || !neCoord) return

        // const params = {
        //     level,
        //     swLat: swCoord.lat,
        //     swLng: swCoord.lng,
        //     neLat: neCoord.lat,
        //     neLng: neCoord.lng,
        // }

        // const response = await httpClient.get(`api/v1/vehicle/cluster`, {
        //     params,
        // })

        const response = await httpClient.get(`api/v1/vehicle/cluster/details`, {
            params: {
                level: 3,
                neLat: 38650929,
                neLng: 132286492,
                swLat: 35519341,
                swLng: 124703415,
            },
        })

        console.log(response)
    },
}
