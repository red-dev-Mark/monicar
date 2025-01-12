import Image from 'next/image'

import * as styles from './styles.css'

type NoticeItemType = {
    id: number
    title: string
    description: string
    imageUrl: string
}

const NoticeBoard = () => {
    // TODO: 임시 데이터 교체
    const notices: NoticeItemType[] = [
        {
            id: 1,
            title: '차량 점검 안내',
            description:
                '안전한 운행을 위해 정기적인 차량 점검이 필요합니다. 차량 상태를 확인하고 필요한 경우 정비를 진행해주세요. 특히 겨울철에는 타이어 상태 점검이 매우 중요합니다.',
            imageUrl: '/images/notice-1.jpg',
        },
        {
            id: 2,
            title: '새로운 기능 업데이트',
            description:
                '더욱 편리한 서비스 이용을 위해 새로운 기능이 추가되었습니다. 업데이트된 기능을 확인하고 더 나은 서비스를 경험해보세요.',
            imageUrl: '/images/notice-2.jpg',
        },
    ]

    return (
        <div className={styles.container}>
            {notices.map((notice) => (
                <div key={notice.id} className={styles.noticeItem}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={notice.imageUrl}
                            alt={notice.title}
                            width={280}
                            height={240}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.contentsWrapper}>
                        <h2 className={styles.title}>{notice.title}</h2>
                        <p className={styles.description}>{notice.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NoticeBoard
