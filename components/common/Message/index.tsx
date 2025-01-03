import { MESSAGES } from './constants'
import * as styles from './styles.css'
import { MessageType } from './types'

interface MessageProps {
    messageType?: MessageType
    isError?: boolean
    className?: string
}
const Message = ({ messageType, isError = false, className }: MessageProps) => {
    const message = messageType ? MESSAGES[messageType.category][messageType.type] : null

    return (
        <div>
            {isError && message && (
                <p
                    className={`
                    ${styles.base} 
                    ${messageType?.category === 'SUCCESS' ? styles.successMessage : ''} 
                    ${className ?? ''}
                `}
                >
                    {message}
                </p>
            )}
        </div>
    )
}
export default Message
