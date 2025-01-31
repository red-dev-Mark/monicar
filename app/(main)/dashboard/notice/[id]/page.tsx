'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Breadcrumb from '@/components/common/Breadcrumb'
import { noticeService } from '@/lib/apis/notice'
import { formatISODateToKorean } from '@/lib/utils/date'
import { NoticeModel } from '@/types/notice'

import * as styles from './styles.css'

// const NoticePage = ({ params }: { params: { id: string } }) => {
const NoticePage = () => {
    // const { id: noticeId } = params

    const [noticeItem, setNoticeItem] = useState<NoticeModel>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getNoticeListData = async () => {
            try {
                setIsLoading(true)

                // const noticeList = await noticeService.getNoticeItem(noticeId)
                const noticeItem = await noticeService.getNoticeItem()

                setNoticeItem(noticeItem)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        getNoticeListData()
    }, [])

    const createdDate = noticeItem?.createdAt ? formatISODateToKorean(noticeItem.createdAt, false) : ''

    if (isLoading) return <div>공지사항 로딩중...</div>
    if (!noticeItem) return

    return (
        <article className={styles.container}>
            <Breadcrumb type={'공지사항'} />

            <div className={styles.contents}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{noticeItem.title}</h1>
                    <p className={styles.createdAt}>{createdDate}</p>
                </div>

                {noticeItem.imageUrl && (
                    <div className={styles.imageWrapper}>
                        <Image src={noticeItem.imageUrl} alt={noticeItem.title} width={300} height={300} />
                    </div>
                )}

                <div className={styles.content}>{noticeItem.content}</div>
            </div>
        </article>
    )
}

export default NoticePage
