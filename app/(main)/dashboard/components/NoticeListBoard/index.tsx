import Image from 'next/image'
import Link from 'next/link'

import NoticeSkeleton from '@/components/common/Skeleton/NoticeSkeleton'
import { useNoticeList } from '@/hooks/queries/useNotice'

import * as styles from './styles.css'

const NoticeListBoard = () => {
    const SKELETONS_COUNT = 5
    const { data: noticeList, isLoading, error } = useNoticeList()

    const Skeletons = () => (
        <>
            {Array.from({ length: SKELETONS_COUNT }).map((_, index) => (
                <NoticeSkeleton key={index} />
            ))}
        </>
    )

    if (error) return

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>공지사항</h2>

            {isLoading ? (
                <Skeletons />
            ) : (
                <div className={styles.noticeList}>
                    {noticeList?.map((notice) => (
                        <Link key={notice.id} href={`/dashboard/notice/${notice.id}`} className={styles.noticeItem}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={notice.imageUrl || '/images/notice-1.jpg'}
                                    alt={notice.title}
                                    width={280}
                                    height={240}
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.contentsWrapper}>
                                <h3 className={styles.title}>{notice.title}</h3>
                                <p className={styles.description}>{notice.content}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NoticeListBoard
