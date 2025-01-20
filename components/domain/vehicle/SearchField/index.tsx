import Image from 'next/image'

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
                <div className={styles.searchInputWrapper}>
                    <SearchInput icon='/icons/search-icon.svg' />
                </div>
                {hasButton && (
                    <div className={styles.buttonGroup}>
                        <RoundButton size={'small'} color={'secondary'}>
                            <div className={styles.buttonContent}>
                                <Image src='/icons/green-excel-icon.svg' alt='excel' width={16} height={16} />
                                엑셀
                            </div>
                        </RoundButton>
                        <RoundButton size={'small'} color={'primary'}>
                            <div className={styles.buttonContent}>
                                <Image src='/icons/white-add-icon.svg' alt='add' width={16} height={16} />
                                등록
                            </div>
                        </RoundButton>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchField
