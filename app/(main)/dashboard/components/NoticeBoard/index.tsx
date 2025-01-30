import Image from 'next/image'
import { useEffect, useState } from 'react'

import { noticeService } from '@/lib/apis/notice'

import * as styles from './styles.css'

// interface NoticeBoardModel {
//     id: number
//     title: string
//     description: string
//     imageUrl: string
// }

// interface NoticeBoardProps {
//     noticeBoardData: NoticeBoardModel[]
// }

interface NoticeModel {
    id: number
    title: string
    content: string
    imageUrl: string
    createdAt: string
}

const NoticeBoard = () => {
    const [noticeList, setNoticeList] = useState<NoticeModel[]>([])

    useEffect(() => {
        const getNoticeListData = async () => {
            const noticeList = await noticeService.getNoticeList()

            setNoticeList(noticeList)
        }
        getNoticeListData()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.announcement}>공지사항</div>
            {noticeList.map((data) => (
                <div key={data.id} className={styles.noticeItem}>
                    <div className={styles.imageWrapper}>
                        <Image src={data.imageUrl} alt={data.title} width={280} height={240} className={styles.image} />
                    </div>
                    <div className={styles.contentsWrapper}>
                        <h2 className={styles.title}>{data.title}</h2>
                        <p className={styles.description}>{data.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NoticeBoard
