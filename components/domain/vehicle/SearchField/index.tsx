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
                {hasButton && (
                    <RoundButton color='secondary' onClick={() => {}} size='small'>
                        등록
                    </RoundButton>
                )}
                <SearchInput icon='/icons/search-icon.svg' />
            </div>
        </div>
    )
}

export default SearchField
