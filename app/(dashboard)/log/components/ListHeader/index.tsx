import * as styles from './styles.css'

const ListHeader = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerTitle}>차량번호</div>
            <div className={styles.headerTitle}>차종</div>
            <div className={styles.headerTitle}>차량현황</div>
            <div className={styles.headerIcon} />
        </div>
    )
}

export default ListHeader
