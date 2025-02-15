import { useCoordToAddress } from '@/hooks/useCoordToAddress'
import { formatISODateToDot } from '@/lib/utils/date'
import { formatMinuteToHour, formatWithCommas } from '@/lib/utils/format'
import { normalizeCoordinate } from '@/lib/utils/normalize'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleDetail } from '@/types/vehicle'

export const getFormattedVehicleDetail = (vehicleDetails: VehicleDetail) => {
    const {
        recentVehicleInfo: { vehicleNumber, status, lastEngineOn, lastEngineOff },
        recentCycleInfo: { speed, lat, lng, lastUpdated },
        todayDrivingHistory,
    } = vehicleDetails

    const normalizedCoordinate = {
        lat: normalizeCoordinate(lat),
        lng: normalizeCoordinate(lng),
    }

    return {
        isDriving: status === 'ON',
        vehicleNumber: addSpaceVehicleNumber(vehicleNumber),
        speed: formatWithCommas(speed),
        lastEngineOn: lastEngineOn ? formatISODateToDot(lastEngineOn) : '-',
        lastEngineOff: lastEngineOff ? formatISODateToDot(lastEngineOff) : '-',
        todayDrivingTime: todayDrivingHistory ? formatMinuteToHour(todayDrivingHistory.drivingTime) : 0,
        todayDrivingDistance: todayDrivingHistory ? formatWithCommas(todayDrivingHistory.distance) : 0,
        lastUpdated: lastUpdated ? formatISODateToDot(lastUpdated) : '-',
        lastAddress: useCoordToAddress(normalizedCoordinate.lat, normalizedCoordinate.lng),
    }
}
