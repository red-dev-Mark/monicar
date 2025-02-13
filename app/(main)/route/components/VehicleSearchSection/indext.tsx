import { ChangeEvent } from 'react'

import SearchInput from '@/components/common/Input/SearchInput'
import { useLoading } from '@/hooks/useLoading'
import { useQueryParams } from '@/hooks/useQueryParams'
import { Result } from '@/types/apis/common'
import { Vehicle } from '@/types/vehicle'

interface VehicleSearchSectionProps {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    searchVehicle: (vehicleNumber: string) => Promise<Result<Vehicle>>
    openRouteSearch: () => void
    onError?: (message: string) => void
    onDatesClean: () => void
}

const VehicleSearchSection = ({
    value,
    onChange,
    searchVehicle,
    openRouteSearch,
    onError,
    onDatesClean,
}: VehicleSearchSectionProps) => {
    const [isSearchingVehicle, startSearchingVehicle, finishSearchingVehicle] = useLoading()

    const { updateQueries, clearAllQueries } = useQueryParams()

    const handleVehicleSearch = async () => {
        try {
            startSearchingVehicle()
            const result = await searchVehicle(value)

            if (!result.isSuccess) throw new Error(result.error || '차량 검색에 실패했습니다')

            onDatesClean()

            if (!result.data) throw new Error()
            const { vehicleId, vehicleNumber } = result?.data

            openRouteSearch()
            updateQueries({ vehicleId, vehicleNumber }, [
                'startDate',
                'endDate',
                'startLat',
                'startLng',
                'endLat',
                'endLng',
            ])
        } catch (error) {
            if (error instanceof Error) {
                onError?.(error.message)
                clearAllQueries()
            }
        } finally {
            finishSearchingVehicle()
        }
    }

    return (
        <SearchInput
            value={value}
            onChange={onChange}
            onSubmit={handleVehicleSearch}
            placeholder='차량번호 검색'
            icon='/icons/pink-search-icon.svg'
            isLoading={isSearchingVehicle}
            disabled={isSearchingVehicle}
            style={{ borderRadius: '8px', boxShadow: 'none' }}
        />
    )
}

export default VehicleSearchSection
