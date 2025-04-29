import { useEffect, useState } from 'react'

import { socket } from '@/lib/socket'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { LiveRoute } from '@/types/route'
import { SocketSubscriptionType } from '@/types/socket'

export const useLiveVehicle = () => {
    const [liveLocation, setLiveLocation] = useState<LiveRoute | null>(null)
    const [isTracking, setIsTracking] = useState(false)

    const startLiveTracking = (sub: SocketSubscriptionType, vehicleId: string) => {
        setIsTracking(true)
        socket.connect(
            sub,
            (message: string) => {
                const location = JSON.parse(message)
                const normalizedLocation = {
                    ...location,
                    lat: normalizeCoordinate(location.lat),
                    lng: normalizeCoordinate(location.lng),
                }
                setLiveLocation(normalizedLocation)
            },
            vehicleId,
        )
    }

    const stopLiveTracking = () => {
        setIsTracking(false)
        socket.disconnect()
        setLiveLocation(null)
    }

    useEffect(() => {
        return () => socket.disconnect()
    }, [])

    return {
        liveLocation,
        isTracking,
        startLiveTracking,
        stopLiveTracking,
    }
}
