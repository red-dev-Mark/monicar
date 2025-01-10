import * as styles from './styles.css'

const ListHeader = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerTitle}>차량번호</div>
            <div className={styles.headerTitle}>부서명</div>
            <div className={styles.headerTitle}>이름</div>
            <div className={styles.headerTitle}>운행일수</div>
            <div className={styles.headerTitle}>평균운행거리</div>
            <div className={styles.headerTitle}>평균운행시간</div>
            <div className={styles.headerTitle}>총운행거리</div>
            <div className={styles.headerTitle}>운행률</div>
            <div className={styles.headerIcon} />
        </div>
    )
}

export default ListHeader
