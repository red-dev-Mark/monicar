import Image from 'next/image'

import LinkButton from '@/components/common/Button/LinkButton'
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
                            <div className={styles.button}>
                                <Image src='/icons/green-excel-icon.svg' alt='excel' width={16} height={16} />
                                엑셀
                            </div>
                        </RoundButton>
                        <LinkButton href={'/log/register'}>
                            <div className={styles.linkButton}>
                                <div className={styles.register}>
                                    <Image src='/icons/white-add-icon.svg' alt='add' width={18} height={18} />
                                    등록
                                </div>
                            </div>
                        </LinkButton>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchField
