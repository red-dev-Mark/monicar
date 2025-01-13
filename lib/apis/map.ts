import { apiClient } from '@/lib/apis/client'

export const mapAPI = {
    fetchReverseGeo: async (x: number, y: number) => {
        const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY
        const response = apiClient.post(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
            {},
            {
                headers: {
                    Authorization: `KakaoAK ${REST_API_KEY}`,
                },
            },
        )

        console.log(response)
    },
}
