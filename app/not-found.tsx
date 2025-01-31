import Image from 'next/image'
import Link from 'next/link'

import { RoundButton } from '@/components/common/Button/RoundButton'

import * as styles from './not-found.styles.css'

const NotFound = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div>
                    <Image src={'/white-logo.png'} width={120} height={80} alt='박스로고' priority />
                    <h1 className={styles.pageNotFoundText}>Page Not Found</h1>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.title}>페이지를 찾을 수 없습니다.</h3>
                    <p className={styles.introduce}>{`모니카와 함께 차량을 조회하고 경로를\n탐색해보세요.`}</p>

                    <Link href='/dashboard'>
                        <RoundButton size='large' color='primary' className={styles.button}>
                            홈으로 돌아가기
                        </RoundButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
