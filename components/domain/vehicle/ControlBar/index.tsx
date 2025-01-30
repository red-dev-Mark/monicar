import Image from 'next/image'

import ExcelButton from '@/components/common/Button/ExcelButton'
import LinkButton from '@/components/common/Button/LinkButton'
import ControlLayout from '@/components/common/ControlLayout'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'

import * as styles from './styles.css'

interface ControlBarProps {
    onExcelButtonClick?: () => void
}

const ControlBar = ({ onExcelButtonClick }: ControlBarProps) => {
    const { modalMessage, isOpen, searchTerm, handleVehicleSearch, handleSearchChange, closeModal } =
        useSearchSingleVehicle()

    return (
        <div>
            <ControlLayout
                control={
                    <SearchInput
                        icon='/icons/search-icon.svg'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onSubmit={handleVehicleSearch}
                    />
                }
                primaryButton={<ExcelButton onClick={onExcelButtonClick} />}
                secondaryButton={
                    <LinkButton href={'/log/register'}>
                        <div className={styles.linkButton}>
                            <Image src='/icons/white-add-icon.svg' alt='add' width={18} height={18} />
                            등록
                        </div>
                    </LinkButton>
                }
            />
            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default ControlBar
