import Image from 'next/image'

import Breadcrumb from '@/components/common/Breadcrumb'

import * as styles from './styles.css'

const NoticePage = () => {
    const MOCK_NOTICE = {
        title: '시스템 정기점검 안내',
        date: '2024-02-15',
        imageUrl: '/images/notice-1.jpg',
        children: `안녕하세요.\n테크돔 시스템 담당자입니다.\n\n시스템 안정화 및 서비스 품질 향상을 위한 정기 점검이 진행될 예정입니다.\n\n[점검 일시]\n2024년 2월 24일(토) 02:00 ~ 06:00 (4시간)\n\n[점검 내용]\n- 시스템 서버 업그레이드\n- 보안 패치 적용\n- 데이터베이스 최적화\n\n[영향 범위]\n- 점검 시간 동안 서비스 이용이 일시적으로 중단됩니다.\n- 진행 상황에 따라 점검 시간이 변동될 수 있습니다.\n\n더 나은 서비스 제공을 위한 점검이오니 이용에 참고 부탁드립니다.\n\n감사합니다.`,
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
