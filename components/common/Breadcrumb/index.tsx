import Link from 'next/link'

import * as styles from './styles.css'
import { BreadcrumbType, logPaths, noticePaths } from './types'

interface BreadcrumbProps {
    type: BreadcrumbType
}

const Breadcrumb = ({ type }: BreadcrumbProps) => {
    const paths = type === '공지사항' ? noticePaths : logPaths
    const index = paths.findIndex((item) => item.label === type)
    const visibleItems = paths.slice(0, index + 1)

    return (
        <nav aria-label='breadcrumb' className={styles.container}>
            <ol className={styles.list}>
                {visibleItems.map((item, index) => (
                    <li key={item.label} className={styles.item}>
                        {index > 0 && <span className={styles.divider}>/</span>}
                        <Link
                            href={item.path}
                            className={styles.link}
                            aria-current={index === visibleItems.length - 1 ? 'page' : undefined}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumb
