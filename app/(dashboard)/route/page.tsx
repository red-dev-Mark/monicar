'use client'

// import { Modal } from '@mantine/core'
import { useEffect, useState } from 'react'
import { Polyline } from 'react-kakao-maps-sdk'

import Map from '@/app/(dashboard)/location/components/Map'
import RouteSearchPanel from '@/app/(dashboard)/route/components/RouteSearchPanel'
// import { ModalMessageType } from '@/components/common/Modal/types'
import { INITIAL_MAP_STATE } from '@/constants/map'
// import { useModal } from '@/hooks/useModal'
import mockRoutesData from '@/mock/vehicle_route_data.json'
import { styles } from '@/styles/theme.css'
import { PathPoint } from '@/types/location'

import * as vars from './styles.css'

const RoutePage = () => {
    const [vehiclePaths, setVehiclePaths] = useState<PathPoint[]>([])
    const [mapStatus, _setMapStatus] = useState(INITIAL_MAP_STATE)
    const [startDate, setStartDate] = useState({ year: '', month: '', date: '', hour: '', minute: '' })
    const [endDate, setEndDate] = useState({ year: '', month: '', date: '', hour: '', minute: '' })
    const [isSearchable, setIsSearchable] = useState(false)

    useEffect(() => {
        const routesData = mockRoutesData.result.routes.map((route) => ({
            id: route.timestamp,
            lat: route.lat,
            lng: route.lon,
        }))

        setVehiclePaths(routesData)
    }, [])

    console.log(isSearchable)

    // const handleButtonClick = () => {
    //     const formattedStartDate = new Date(
    //         `${startDate.year}-${startDate.month}-${startDate.date}T${startDate.hour}:${startDate.minute}:00`,
    //     ).getTime()
    //     const formattedEndDate = new Date(
    //         `${endDate.year}-${endDate.month}-${endDate.date}T${endDate.hour}:${endDate.minute}:00`,
    //     ).getTime()

    //     if (formattedStartDate >= formattedEndDate) {
    //         alert('종료 일시는 시작 일시보다 같거나 빠르면 안됩니다')
    //     }
    // }

    return (
        <div className={vars.container}>
            <Map center={vehiclePaths[vehiclePaths.length / 2]} zoom={mapStatus.level}>
                <Polyline
                    path={[vehiclePaths]}
                    strokeWeight={5}
                    strokeColor={styles.colors.primary}
                    strokeOpacity={1}
                    strokeStyle={'solid'}
                />
            </Map>

            <RouteSearchPanel
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                // onButtonClick={handleButtonClick}
                setIsSearchable={setIsSearchable}
            />
        </div>
    )
}

export default RoutePage
