import { Loader, Tooltip } from '@mantine/core'
import { DatesRangeValue } from '@mantine/dates'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import SquareButton from '@/components/common/Button/SquareButton'
import { MAP_CONFIG } from '@/constants/map'
import { useLoading } from '@/hooks/useLoading'
import { useMapStatus } from '@/hooks/useMapStatus'
import { useQueryParams } from '@/hooks/useQueryParams'
import { routeService } from '@/lib/apis'
import { normalizeRoutes } from '@/lib/utils/normalize'
import { vars } from '@/styles/theme.css'
import { LatLng, MapRefType } from '@/types/map'

interface RouteSearchButtonProps {
    mapRef: MapRefType
    vehicleId: string
    dateRange: DatesRangeValue
    disabled: { isVehicleNumberDirty: boolean; isRouteSearchable: boolean }
    onRoutesChange: (paths: LatLng[]) => void
    onError: (message: string) => void
}

const RouteSearchButton = ({
    mapRef,
    vehicleId,
    dateRange,
    disabled,
    onRoutesChange,
    onError,
}: RouteSearchButtonProps) => {
    const [isSearchingRoute, startSearchingRoute, finishSearchingRoute] = useLoading()

    const { controlMapStatus } = useMapStatus(mapRef.current)
    const { clearAllQueries } = useQueryParams()

    const searchParams = useSearchParams()

    const live = searchParams.get('live') === 'true'

    useEffect(() => {
        const getRouteData = async () => {
            await searchRoutes()
        }
        getRouteData()
    }, [mapRef.current])

    const searchRoutes = async () => {
        try {
            const [startDate, endDate] = dateRange
            if (!startDate || !endDate) return

            startSearchingRoute()
            const result = await routeService.getVehicleRoutesData({ vehicleId, dateRange })
            if (!result?.isSuccess)
                throw new Error(result.error || '경로 조회에 실패했습니다. 잠시 후 다시 시도해주세요')

            if (result.data) {
                const normalizedRoutes = normalizeRoutes(result.data.routes)
                if (!normalizedRoutes?.length) throw new Error('해당 기간의 경로 정보가 없습니다')
                onRoutesChange(normalizedRoutes)

                const endPosition = normalizedRoutes[normalizedRoutes.length - 1]
                controlMapStatus(
                    { lat: Number(endPosition.lat), lng: Number(endPosition.lng) },
                    MAP_CONFIG.ROUTE.ZOOM_INCREMENT,
                )
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
                          ? '변경된 차량번호를 먼저 조회해주세요'
                          : '조회 기간을 선택해주세요'
                }
                withArrow
                position='top'
                disabled={!(isVehicleNumberDirty || !isRouteSearchable)}
            >
                <div>
                    <SquareButton disabled={isButtonDisable} onClick={searchRoutes}>
                        {isSearchingRoute ? <Loader color={vars.colors.white} size='sm' /> : '경로 보기'}
                    </SquareButton>
                </div>
            </Tooltip>
        </div>
    )
}

export default RouteSearchButton
