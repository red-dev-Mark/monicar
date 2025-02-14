import { Suspense } from 'react'

import NoticeContent from '@/app/(main)/dashboard/notice/components/NoticeContent'
import PageLoader from '@/components/common/PageLoader'

import * as styles from './styles.css'

const NoticePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id: noticeId } = await params

    return (
        <article className={styles.container}>
            <div className={styles.contents}>
                <Suspense fallback={<PageLoader />}>
                    <NoticeContent noticeId={noticeId} />
                </Suspense>
            </div>
        </article>
    )
}

export default NoticePage
