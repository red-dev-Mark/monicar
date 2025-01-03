import * as styles from './styles.css'

interface MessageProps {
    message: string
    isError?: boolean
}
const Message = ({ message, isError = true }: MessageProps) => {
    const messageStyle = isError ? styles.message.error : styles.message.success

    return <p className={`${messageStyle} ${styles.base}`}>{message}</p>
}

export default Message
