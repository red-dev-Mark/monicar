import * as styles from './styles.css'

interface ListHeaderProps {
    headerTitles: string[]
}

const ListHeader = ({ headerTitles = [] }: ListHeaderProps) => {
    return (
        <div className={styles.container}>
            {headerTitles.map((title) => (
                <div key={title} className={styles.headerTitle}>
                    {title}
                </div>
            ))}
            <div className={styles.headerIcon} />
        </div>
    )
}

export default ListHeader
