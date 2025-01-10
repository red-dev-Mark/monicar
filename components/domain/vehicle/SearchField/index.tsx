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
                <div className={styles.buttonWrapper}>
                    {hasButton && (
                        <RoundButton color='secondary' onClick={() => {}} size='small'>
                            등록
                        </RoundButton>
                    )}
                </div>
                <div className={styles.searchInputWrapper}>
                    <SearchInput icon='/icons/search-icon.svg' />
                </div>
            </div>
        </div>
    )
}

export default SearchField
