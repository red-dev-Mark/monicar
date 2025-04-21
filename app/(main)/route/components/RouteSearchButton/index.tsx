import { Loader, Tooltip } from '@mantine/core'
import { DatesRangeValue } from '@mantine/dates'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import SquareButton from '@/components/common/Button/SquareButton'
import { MAP_CONFIG } from '@/constants/map'
import { useLoading } from '@/hooks/useLoading'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useQueryParams } from '@/hooks/useQueryParams'
import { routeService } from '@/lib/apis'
import { getVehicleOperationInfo } from '@/lib/services/vehicle'
import { normalizeRoutes } from '@/lib/utils/normalize'
import { vars } from '@/styles/theme.css'
import { LatLng, MapRefType } from '@/types/map'

interface RouteSearchButtonProps {
    mapRef: MapRefType
    disabled: { isVehicleNumberDirty: boolean; isRouteSearchable: boolean }
    onRoutesChange: (paths: LatLng[]) => void
    onError: (message: string) => void
}

const RouteSearchButton = ({ mapRef, disabled, onRoutesChange, onError }: RouteSearchButtonProps) => {
    const [vehicleId, setVehicleId] = useState('')
    const [isSearchingRoute, startSearchingRoute, finishSearchingRoute] = useLoading()

    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { addQueries, clearAllQueries } = useQueryParams()

    const searchParams = useSearchParams()

    const vehicleNumber = searchParams.get('vehicleNumber') || ''
    const startDate = searchParams.get('startDate') || ''
    const endDate = searchParams.get('endDate') || ''
    const lat = searchParams.get('endLat')
    const lng = searchParams.get('endLng')
    const live = searchParams.get('live') === 'true'
    const dateRange: DatesRangeValue = [startDate ? new Date(startDate) : null, endDate ? new Date(endDate) : null]

    useEffect(() => {
        if (vehicleNumber && startDate && endDate) {
            const getVehicleId = async () => {
                const result = await getVehicleOperationInfo(vehicleNumber, onError)
                if (!result) return

                setVehicleId(result.vehicleId)
            }
            getVehicleId()
        }
    }, [vehicleNumber, startDate, endDate, onError])

    useEffect(() => {
        if (!mapRef.current || !lat || !lng || !vehicleNumber) {
            onRoutesChange([])
            return
        }

        const getRouteData = async () => {
            controlMapStatus({ lat: Number(lat), lng: Number(lng) }, MAP_CONFIG.ROUTE.ZOOM_INCREMENT)

            await handleButtonClick()
        }

        getRouteData()
    }, [lat, lng, vehicleId, mapRef, vehicleNumber])

    const handleButtonClick = async () => {
        const [startDate, endDate] = dateRange
        if (!vehicleId || !startDate || !endDate) return

        startSearchingRoute()

        try {
            const result = await routeService.getVehicleRoutesData({ vehicleId, dateRange })
            if (!result?.data) throw new Error(result.error || '경로 조회에 실패했습니다. 잠시 후 다시 시도해주세요')

            const { routes } = result.data

            if (routes) {
                const normalizedRoutes = normalizeRoutes(routes)
                onRoutesChange(normalizedRoutes)

                if (!normalizedRoutes?.length) throw new Error('해당 기간의 경로 정보가 없습니다')

                const endPosition = normalizedRoutes[normalizedRoutes.length - 1]
                addQueries({ endLat: endPosition.lat, endLng: endPosition.lng })
            }
        } catch (error) {
            if (error instanceof Error) {
                clearAllQueries()
                onError?.(error.message)
            }
        } finally {
            finishSearchingRoute()
        }
    }

    const { isVehicleNumberDirty, isRouteSearchable } = disabled
    const isButtonDisable = !!isVehicleNumberDirty || !isRouteSearchable || !!isSearchingRoute || live

    return (
        <div>
            <Tooltip
                color={vars.colors.gray[800]}
                arrowSize={6}
                label={
                    live
                        ? '실시간 추적 중에는 경로 조회가 불가능합니다'
                        : isVehicleNumberDirty
                          ? '차량번호를 먼저 검색해주세요'
                          : '조회 기간을 선택해주세요'
                }
                withArrow
                position='top'
                disabled={!(isVehicleNumberDirty || !isRouteSearchable)}
            >
                <div>
                    <SquareButton disabled={isButtonDisable} onClick={handleButtonClick}>
                        {isSearchingRoute ? <Loader color={vars.colors.white} size='sm' /> : '경로 보기'}
                    </SquareButton>
                </div>
            </Tooltip>
        </div>
    )
}

export default RouteSearchButton
