import Image from 'next/image'

import * as styles from './styles.css'

interface NoticeBoardModel {
    id: number
    title: string
    description: string
    imageUrl: string
}

interface NoticeBoardProps {
    noticeBoardData: NoticeBoardModel[]
}

const NoticeBoard = ({ noticeBoardData }: NoticeBoardProps) => {
    return (
        <div className={styles.container}>
            {noticeBoardData.map((data) => (
                <div key={data.id} className={styles.noticeItem}>
                    <div className={styles.imageWrapper}>
                        <Image src={data.imageUrl} alt={data.title} width={280} height={240} className={styles.image} />
                    </div>
                    <div className={styles.contentsWrapper}>
                        <h2 className={styles.title}>{data.title}</h2>
                        <p className={styles.description}>{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NoticeBoard
