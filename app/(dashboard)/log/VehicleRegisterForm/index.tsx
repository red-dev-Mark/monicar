'use client'

import { Select } from '@mantine/core'

import BaseInput from '@/components/common/Input/BaseInput'
import SearchInput from '@/components/common/Input/SearchInput'
import Message from '@/components/common/Message'
import { MESSAGES } from '@/components/common/Message/constants'

import * as styles from './styles.css'

interface VehicleRegisterFormProps {
    isError?: boolean
}

const VehicleRegisterForm = ({ isError = false }: VehicleRegisterFormProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentsWrapper}>
                <div className={styles.fieldWrapper}>
                    <div className={styles.textWrapper}>차량번호</div>
                    <div className={styles.inputWrapper}>
                        <SearchInput icon='/icons/pink-search-icon.svg' />
                    </div>
                </div>

                {isError && <Message message={MESSAGES.ERROR.REGISTRATION_UNAVAILABLE} />}
            </div>

            <div className={styles.contentsWrapper}>
                <div className={styles.fieldWrapper}>
                    <div className={styles.textWrapper}>차량종류</div>
                    <div className={styles.inputWrapper}>
                        <Select></Select>
                    </div>
                </div>
                {isError && <Message message={MESSAGES.ERROR.VEHICLE_SELECTION_REQUIRED} />}
            </div>

            <div className={styles.contentsWrapper}>
                <div className={styles.fieldWrapper}>
                    <div className={styles.textWrapper}>주행거리</div>
                    <div className={styles.inputWrapper}>
                        <BaseInput placeholder='0km' />
                    </div>
                </div>
                {isError && <Message message={MESSAGES.ERROR.MILEAGE_REQUIRED} />}
            </div>

            <div className={styles.contentsWrapper}>
                <div className={styles.fieldWrapper}>
                    <div className={styles.textWrapper}>출고일</div>
                    <div className={styles.inputWrapper}>
                        <BaseInput placeholder='0000-00-00' />
                    </div>
                </div>
                {isError && <Message message={MESSAGES.ERROR.DATE_REQUIRED} />}
            </div>
        </div>
    )
}

export default VehicleRegisterForm
