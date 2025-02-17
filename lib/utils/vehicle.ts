import { formatISODateToDot } from '@/lib/utils/date'
import { formatMinuteToHour, formatWithCommas } from '@/lib/utils/format'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleDetail } from '@/types/vehicle'

export const getFormattedVehicleDetail = (vehicleDetail: VehicleDetail) => {
    const {
        recentVehicleInfo: { vehicleNumber, status, lastEngineOn, lastEngineOff },
        recentCycleInfo: { speed, lastUpdated },
        todayDrivingHistory,
    } = vehicleDetail

    return {
        isDriving: status === 'ON',
        vehicleNumber: addSpaceVehicleNumber(vehicleNumber),
        speed: formatWithCommas(speed),
        lastEngineOn: lastEngineOn ? formatISODateToDot(lastEngineOn) : '-',
        lastEngineOff: lastEngineOff ? formatISODateToDot(lastEngineOff) : '-',
        todayDrivingTime: todayDrivingHistory ? formatMinuteToHour(todayDrivingHistory.drivingTime) : 0,
        todayDrivingDistance: todayDrivingHistory ? formatWithCommas(todayDrivingHistory.distance) : 0,
        lastUpdated: lastUpdated ? formatISODateToDot(lastUpdated) : '-',
    }
}
