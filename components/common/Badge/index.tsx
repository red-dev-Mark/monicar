import { ComponentPropsWithoutRef } from 'react'

import * as styles from './styles.css'
import { OperationStatusType, ShapeType, VehicleRoleType } from './types'

interface BadgeProps extends Omit<ComponentPropsWithoutRef<'span'>, 'className'> {
    shape: ShapeType
    variant: OperationStatusType | VehicleRoleType
    className?: string
}

const Badge = ({ shape, variant, className, ...props }: BadgeProps) => {
    return (
        <span
            className={`${styles.base} ${styles.shape[shape]} ${styles.variant[variant]} ${className ?? ''}`}
            {...props}
        >
            {variant}
        </span>
    )
}

export default Badge
