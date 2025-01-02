import { MESSAGES } from './constants'
import * as styles from './styles.css'

export type MessageType = {
    category: keyof typeof MESSAGES
    type: keyof (typeof MESSAGES)[keyof typeof MESSAGES]
}

interface MessageProps {
    messageType?: MessageType
    isError?: boolean
    className?: string
}

const Message = ({ messageType, isError = false, className }: MessageProps) => {
    const message = messageType ? MESSAGES[messageType.category][messageType.type] : null

    return <div>{isError && message && <p className={`${styles.base} ${className ?? ''}`}>{message}</p>}</div>
}

export default Message
