import { Suspense } from 'react'

import NoticeContent from '@/app/(main)/dashboard/notice/components/NoticeContent'
import Breadcrumb from '@/components/common/Breadcrumb'

import * as styles from './styles.css'

const NoticePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id: noticeId } = await params

    return (
        <article className={styles.container}>
            <Breadcrumb type={'공지사항'} />

            <div className={styles.contents}>
                <Suspense fallback={<div>👾 공지사항 로딩 중...</div>}>
                    <NoticeContent noticeId={noticeId} />
                </Suspense>
            </div>
        </article>
    )
}

export default NoticePage
