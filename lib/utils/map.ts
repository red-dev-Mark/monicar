import { MapState } from '@/types/map'

export const convertCoordsToAddress = (lat: number, lng: number): Promise<string> => {
    const geocoder = new kakao.maps.services.Geocoder()

    return new Promise((resolve, reject) => {
        geocoder.coord2Address(lng, lat, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                resolve(result[0].address.address_name)
            } else {
                reject(new Error('주소 변환 실패'))
            }
        })
    })
}

export const getMarkerColor = (count: number) => {
    if (count <= 100) {
        return {
            outer: '#fdced440',
            inner: '#fdced480',
        }
    }
    if (count <= 1000) {
        return {
            outer: '#fb7da740',
            inner: '#fb7da780',
        }
    }
    return {
        outer: '#f41d4e40',
        inner: '#f41d4e80',
    }
}

export const getCurrentMapStatus = (map: kakao.maps.Map): MapState => {
    const level = map.getLevel()

    const bounds = map.getBounds()
    const swLat = bounds.getSouthWest().getLat()
    const swLng = bounds.getSouthWest().getLng()
    const neLat = bounds.getNorthEast().getLat()
    const neLng = bounds.getNorthEast().getLng()

    const swCoord = { lat: swLat, lng: swLng }
    const neCoord = { lat: neLat, lng: neLng }

    return {
        level,
        swCoord,
        neCoord,
    }
}
