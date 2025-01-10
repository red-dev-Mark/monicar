'use client'

import Message from '@/components/common/Message'

import * as styles from './styles.css'

interface VehicleRegisterFormProps {
    label: string
    isError?: boolean
    children: React.ReactNode
}

const VehicleRegisterForm = ({ label, isError, children }: VehicleRegisterFormProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentsWrapper}>
                <div className={styles.fieldWrapper}>
                    <div className={styles.textWrapper}>{label}</div>
                    <div className={styles.inputWrapper}>{children}</div>
                </div>

                {isError && <Message message={''} />}
            </div>
        </div>
    )
}

export default VehicleRegisterForm
