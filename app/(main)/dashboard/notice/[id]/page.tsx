// 'use client'

// import { use, useEffect, useState } from 'react'
import Image from 'next/image'
import { Suspense } from 'react'

import Breadcrumb from '@/components/common/Breadcrumb'
import { noticeService } from '@/lib/apis/notice'
import { formatISODateToKorean } from '@/lib/utils/date'
import { NoticeModel } from '@/types/notice'

import * as styles from './styles.css'

const NoticePage = async ({ params }: { params: { id: string } }) => {
    const { id: noticeId } = params
    // const unWrappedParams = use(params)
    // const { id: noticeId } = unWrappedParams

    // console.log(noticeId)

    // const [noticeItem, setNoticeItem] = useState<NoticeModel>()
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     const getNoticeListData = async () => {
    //         try {
    //             setIsLoading(true)

    //             const noticeItem = await noticeService.getNoticeItem(noticeId)
    //             // const noticeItem = await noticeService.getNoticeItem('2')

    //             setNoticeItem(noticeItem)
    //         } catch (error) {
    //             console.error(error)
    //         } finally {
    //             setIsLoading(false)
    //         }
    //     }

    //     getNoticeListData()
    // }, [])

    const noticeItem: NoticeModel = await noticeService.getNoticeItem(noticeId)

    const createdDate = noticeItem?.createdAt ? formatISODateToKorean(noticeItem.createdAt, false) : ''

    // if (isLoading) return <div>공지사항 로딩중...</div>
    if (!noticeItem) return

    return (
        <article className={styles.container}>
            <Breadcrumb type={'공지사항'} />

            <div className={styles.contents}>
                <Suspense fallback={<div>👾 공지사항 로딩 중...</div>}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>{noticeItem.title}</h1>
                        <p className={styles.createdAt}>{createdDate}</p>
                    </div>

                    {noticeItem.imageUrl && (
                        <div className={styles.imageWrapper}>
                            <Image
                                src={noticeItem.imageUrl || '/images/notice-1.jpg'}
                                alt={noticeItem.title}
                                width={300}
                                height={300}
                            />
                        </div>
                    )}

                    <div className={styles.content}>{noticeItem.content}</div>
                </Suspense>
            </div>
        </article>
    )
}

export default NoticePage
