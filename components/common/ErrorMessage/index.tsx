import Image from 'next/image'

import { ERROR_MESSAGES } from './constants'
import * as styles from './styles.css'

interface ErrorMessageProps {
    message: keyof typeof ERROR_MESSAGES
    hasIcon?: boolean
}
const ErrorMessage = ({ message, hasIcon = false }: ErrorMessageProps) => {
    return (
        <div className={styles.errorMessage}>
            {hasIcon && <Image src='/icons/alert_icon.svg' alt='Alert Icon' className={styles.icon} />}
            <span>{ERROR_MESSAGES[message]}</span>
        </div>
    )
}

export default ErrorMessage
