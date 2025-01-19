import Image from 'next/image'

import Breadcrumb from '@/components/common/Breadcrumb'

import * as styles from './styles.css'

const NoticePage = () => {
    const MOCK_NOTICE = {
        title: '시스템 정기점검 안내',
        date: '2024-02-15',
        imageUrl: '/images/notice-1.jpg',
        children: `안녕하세요. 2024년 2월 정기점검 일정을 안내드립니다. 점검 시간 동안에는 서비스 이용이 제한될 수 있습니다. 사용자 여러분의 너그러운 양해 부탁드립니다.`,
    }

    return (
        <article className={styles.container}>
            <Breadcrumb type={'공지사항'} />
            <div className={styles.contents}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{MOCK_NOTICE.title}</h1>
                    <div className={styles.date}>{MOCK_NOTICE.date}</div>
                </div>
                {MOCK_NOTICE.imageUrl && (
                    <div className={styles.imageWrapper}>
                        <Image src={MOCK_NOTICE.imageUrl} alt={MOCK_NOTICE.title} width={500} height={500} />
                    </div>
                )}
                <div className={styles.children}>{MOCK_NOTICE.children}</div>
            </div>
        </article>
    )
}

export default NoticePage
