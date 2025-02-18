import { ChangeEvent } from 'react'

import SearchInput from '@/components/common/Input/SearchInput'
import { useQueryParams } from '@/hooks/useQueryParams'
import { validateVehicleNumber } from '@/lib/utils/validation'
interface VehicleSearchSectionProps {
    // setOperationPeriod: Dispatch<SetStateAction<VehicleOperationPeriod | null>>
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    // searchVehicle: (vehicleNumber: string) => Promise<Result<Vehicle>>
    // openRouteSearch: () => void
    onError?: (message: string) => void
    // onDatesClean: () => void
}

const VehicleSearchSection = ({
    value,
    onChange,
    // searchVehicle,
    // openRouteSearch,
    onError,
    // onDatesClean,
}: VehicleSearchSectionProps) => {
    // const [inputValue, setInputValue] = useState('')

    const { addQuery } = useQueryParams()

    const handleInputSubmit = () => {
        try {
            const validation = validateVehicleNumber(value)
            if (!validation.isValid) {
                return { isSuccess: false, error: validation.message! }
            }
            addQuery('vehicleNumber', value)
        } catch (error) {
            if (error instanceof Error) {
                onError?.(error.message)
            }
        }
    }

    return (
        <SearchInput
            value={value}
            onChange={onChange}
            onSubmit={handleInputSubmit}
            placeholder='차량번호 검색'
            icon='/icons/pink-search-icon.svg'
            // isLoading={isSearchingVehicle}
            // disabled={isSearchingVehicle}
            style={{ borderRadius: '8px', boxShadow: 'none' }}
        />
    )
}

export default VehicleSearchSection
