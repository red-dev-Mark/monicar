import { RoundButton } from '@/components/common/Button/RoundButton'
import SearchInput from '@/components/common/Input/SearchInput'

import * as styles from './styles.css'

interface SearchFieldProps {
    hasButton: boolean
}
const SearchField = ({ hasButton }: SearchFieldProps) => {
    return (
        <div>
            <div className={styles.container}>
                <SearchInput icon='/icons/search-icon.svg' />
                {hasButton && (
                    <RoundButton size={'small'} color={'primary'}>
                        등록
                    </RoundButton>
                )}
            </div>
        </div>
    )
}

export default SearchField
