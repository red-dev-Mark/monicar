'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

import VehicleDetailsCard from '@/app/(main)/location/components/VehicleDetailsCard'
import VehicleStatusPanel from '@/app/(main)/location/components/VehicleStatusPanel'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'
import { vehicleAPI } from '@/lib/apis'
import { VehicleDetailsModel, VehicleInfoModel } from '@/types/vehicle'

import * as styles from './styles.css'

const MapSection = dynamic(() => import('./components/MapSection'), {
    ssr: false,
})

const LocationPage = () => {
    const [isDetailsCardVisible, setIsDetailsCardVisible] = useState(false)
    const [vehicleDetails, setVehicleDetails] = useState<VehicleDetailsModel>()
    // const [isMapLoaded, setIsMapLoaded] = useState(false)
    // const [cluster, setCluster] = useState()

    // const mapRef = useRef<kakao.maps.Map>(null)
    // const [info, setInfo] = useState<string>('')

    // console.log(isMapLoaded)

    const {
        vehicleInfo,
        mapState,
        isVehicleVisible,
        searchTerm,
        modalMessage,
        isOpen,
        handleVehicleSearch,
        handleSearchChange,
        closeModal,
    } = useSearchSingleVehicle()

    // useEffect(() => {
    //     const getInfo = () => {
    //         if (!isMapLoaded || !mapRef.current) return
    //         const map = mapRef.current

    //         console.log(map)
    //         // if (!map) return

    //         // 지도의 현재 레벨을 얻어옵니다
    //         // const level = map.getLevel()

    //         // // 지도의 현재 영역을 얻어옵니다
    //         // const bounds = map.getBounds()
    //         // // 영역의 남서쪽 좌표를 얻어옵니다
    //         // const swLatLng = bounds.getSouthWest()
    //         // // 영역의 북동쪽 좌표를 얻어옵니다
    //         // const neLatLng = bounds.getNorthEast()

    //         //   swLatLng.getLat() +
    //         //   swLatLng.getLng() +
    //         //   neLatLng.getLat() +
    //         //   neLatLng.getLng() +
    //         // setInfo(message)

    //         // console.log(level, swLatLng)
    //     }
    //     getInfo()
    // }, [isMapLoaded, mapRef])

    const handleVehicleClick = async () => {
        const { vehicleId } = vehicleInfo as VehicleInfoModel
        const vehicleDetailsData = await vehicleAPI.getVehicleDetailInfo(vehicleId)

        setVehicleDetails(vehicleDetailsData)
        setIsDetailsCardVisible(true)
    }

    // const adsfafasdf = async () => {
    //     await vehicleAPI.getClusteringInfo()
    // }

    const isVehicleMarkerVisible = !!(isVehicleVisible && vehicleInfo)
    const isVehicleDetailsVisible = !!(isDetailsCardVisible && vehicleDetails)

    return (
        <div className={styles.container}>
            {/* <button onClick={adsfafasdf}>ㅁㅇㄴㄹㅇㅁㄴㄹㄴㅁㄹㅁㄴㄹ</button> */}
            <MapSection
                // mapRef={mapRef}
                mapState={mapState}
                vehicleInfo={vehicleInfo as VehicleInfoModel}
                isVehicleMarkerVisible={isVehicleMarkerVisible}
                onVehicleClick={handleVehicleClick}
                // onMapLoad={() => setIsMapLoaded(true)}
            />
            <div className={styles.searchInputWrapper}>
                <SearchInput
                    icon='/icons/search-icon.svg'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onSubmit={handleVehicleSearch}
                />
            </div>
            <VehicleStatusPanel />
            {isVehicleDetailsVisible && (
                <VehicleDetailsCard vehicleDetails={vehicleDetails} onCloseButtonClick={setIsDetailsCardVisible} />
            )}

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default LocationPage
