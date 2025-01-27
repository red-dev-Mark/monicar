'use client'

import React from 'react'
import { MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk'

import VehicleMarker from '@/app/(main)/location/components/VehicleMarker'
import Map from '@/components/domain/map/Map'
import { MARKER_IMAGE } from '@/constants/map'
import koreaLocation from '@/mock/metropolitan_coordinates.json'
import { vars } from '@/styles/theme.css'
import { MapState } from '@/types/map'
import { VehicleInfoModel } from '@/types/vehicle'

interface MapSectionProps {
    mapState: MapState
    vehicleInfo: VehicleInfoModel
    isVehicleMarkerVisible: boolean
    onVehicleClick: () => void
}

const MapSection = ({ mapState, vehicleInfo, isVehicleMarkerVisible, onVehicleClick }: MapSectionProps) => {
    return (
        <Map center={mapState.center} zoom={mapState.level}>
            {isVehicleMarkerVisible && <VehicleMarker vehicleInfo={vehicleInfo} onVehicleClick={onVehicleClick} />}
            <MarkerClusterer
                averageCenter={true}
                styles={[
                    {
                        width: '40px',
                        height: '40px',
                        background: '#ed968490',
                        borderRadius: '50%',
                        color: vars.colors.black,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                    },
                    {
                        width: '60px',
                        height: '60px',
                        background: '#008a8590',
                        borderRadius: '50%',
                        color: vars.colors.black,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                    },
                    {
                        width: '80px',
                        height: '80px',
                        background: '#ff385c80',
                        borderRadius: '50%',
                        color: vars.colors.black,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                    },
                ]}
                calculator={[10, 30, 50]}
                gridSize={100}
            >
                {koreaLocation.map((marker, index) => (
                    <MapMarker key={index} position={marker} image={MARKER_IMAGE} />
                ))}
            </MarkerClusterer>
        </Map>
    )
}

export default MapSection
