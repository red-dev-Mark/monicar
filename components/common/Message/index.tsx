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

    const messageStyle = messageType?.category === 'SUCCESS' ? styles.successMessage : styles.errorMessage

    return <div>{isError && message && <p className={`${messageStyle} ${className ?? ''}`}>{message}</p>}</div>
}

export default Message
