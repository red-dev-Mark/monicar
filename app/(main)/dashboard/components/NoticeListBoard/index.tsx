import Image from 'next/image'
import { useEffect, useState } from 'react'

import { noticeService } from '@/lib/apis/notice'
import { NoticeModel } from '@/types/notice'

import * as styles from './styles.css'

const NoticeListBoard = () => {
    const [noticeList, setNoticeList] = useState<NoticeModel[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getNoticeListData = async () => {
            try {
                setIsLoading(true)

                const noticeList = await noticeService.getNoticeList()

                setNoticeList(noticeList)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        getNoticeListData()
    }, [])

    if (isLoading) return <div>공지사항 로딩중...</div>

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

export default NoticeListBoard
