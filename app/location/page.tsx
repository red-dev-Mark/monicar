import Map from '@/app/location/components/Map'
import SearchInput from '@/components/common/Input/SearchInput'

const LocationPage = () => {
    return (
        <div>
            <Map />
            <div>
                <SearchInput />
            </div>
        </div>
    )
}

export default LocationPage
