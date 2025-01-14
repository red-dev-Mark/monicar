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
