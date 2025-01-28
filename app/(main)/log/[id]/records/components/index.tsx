import * as styles from './styles.css'

interface RecordsBoxProps {
    control?: React.ReactNode
    button: React.ReactNode
    title: string
    children: React.ReactNode
}
const RecordsBox = ({ control, button, title, children }: RecordsBoxProps) => {
    return (
        <>
            <div className={styles.control}>
                {control}
                <div className={styles.button}>{button}</div>
            </div>

            <div className={styles.contents}>
                <div className={styles.title}>{title}</div>
                {children}
            </div>
        </>
    )
}

export default RecordsBox
