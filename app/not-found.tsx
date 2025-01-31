import Link from 'next/link'

import * as styles from './not-found.styles.css'

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Page Not Found</h1>
                </div>

                <div>
                    <h3>페이지를 찾을 수 없습니다.</h3>
                    <p>모니카와 함께 차량을 조회하고 경로를 탐색해보세요.</p>
                    <Link href='/dashboard'>홈으로 돌아가기</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
