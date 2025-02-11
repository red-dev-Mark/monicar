'use client'

import * as styles from './styles.css'

interface FormField {
    id: string
    label: string
    component: React.ReactNode
}

interface VehicleRegisterFormProps {
    fields: FormField[]
}

const VehicleRegisterForm = ({ fields }: VehicleRegisterFormProps) => {
    return (
        <div className={styles.container}>
            {fields.map((field) => (
                <div key={field.id} className={styles.fieldWrapper}>
                    <div className={styles.textWrapper}>{field.label}</div>
                    <div className={styles.inputWrapper}>{field.component}</div>
                </div>
            ))}
        </div>
    )
}

export default VehicleRegisterForm
