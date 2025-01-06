import Map from '@/app/location/components/Map'
import SearchInput from '@/components/common/Input/SearchInput'

import * as styles from './styles.css'

const LocationPage = () => {
    return (
        <div className={styles.container}>
            <Map />
            <div className={styles.searchInputWrapper}>
                <SearchInput icon='/icons/search-icon.svg' />
            </div>
            <div className={styles.vehicleStatusWrapper}></div>
        </div>
    )
}

export default LocationPage
