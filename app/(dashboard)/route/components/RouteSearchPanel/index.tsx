'use client'

import { ChangeEvent, useState } from 'react'

import DateTimeSelect from '@/app/(dashboard)/route/components/RouteSearchPanel/DateTimeSelect'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useSearchVehicle } from '@/hooks/useSearchVehicle'

import * as styles from './styles.css'

const RouteSearchPanel = () => {
    const [inputVehicleNumber, setInputVehicleNumber] = useState('')
    const { searchVehicle, vehicleData, isOpen, modalMessage, closeModal } = useSearchVehicle()

    const isButtonDisabled = Boolean(vehicleData)

    return (
        <div className={styles.panel}>
            <div className={styles.searchSection}>
                <h3 className={styles.sectionTitle}>차량 검색</h3>
                <SearchInput
                    value={inputVehicleNumber}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setInputVehicleNumber(event.target.value)}
                    onSubmit={searchVehicle}
                    placeholder='차량번호 검색'
                    icon='/icons/pink-search-icon.svg'
                    style={{
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                />
            </div>

            <div className={styles.searchSection}>
                <h3 className={styles.sectionTitle}>기간 검색</h3>
                <DateTimeSelect label='시작 일시' />
                <DateTimeSelect label='종료 일시' />
            </div>
            <SquareButton disabled={!isButtonDisabled}>조회하기</SquareButton>

            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default RouteSearchPanel
