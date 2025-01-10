'use client'

import Message from '@/components/common/Message'

import * as styles from './styles.css'

interface FormField {
    id: string
    label: string
    isError?: boolean
    component: React.ReactNode
}

interface VehicleRegisterFormProps {
    fields: FormField[]
}

const VehicleRegisterForm = ({ fields }: VehicleRegisterFormProps) => {
    return (
        <div className={styles.container}>
            {fields.map((filed) => (
                <div key={filed.id} className={styles.contentsWrapper}>
                    <div className={styles.fieldWrapper}>
                        <div className={styles.textWrapper}>{filed.label}</div>
                        <div className={styles.inputWrapper}>{filed.component}</div>
                    </div>
                    {filed.isError && <Message message={''} />}
                </div>
            ))}
        </div>
    )
}

export default VehicleRegisterForm
