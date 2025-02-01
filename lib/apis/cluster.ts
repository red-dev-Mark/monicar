import { httpClient } from '@/lib/apis/client'
import { MapState } from '@/types/map'

export const clusterService = {
    // 뷰포트 영역 내 클러스터링 정보 조회
    // getClusteringInfo: async () => {
    getClusteringInfo: async ({ level, swCoord, neCoord }: MapState) => {
        if (!level || !swCoord || !neCoord) return

        const params = {
            level,
            swLat: swCoord.lat,
            swLng: swCoord.lng,
            neLat: neCoord.lat,
            neLng: neCoord.lng,
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
