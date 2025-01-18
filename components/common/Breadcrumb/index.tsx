import Link from 'next/link'

import * as styles from './styles.css'
import { breadcrumbPaths, BreadcrumbType } from './type'

interface BreadcrumbProps {
    type: BreadcrumbType
}

const Breadcrumb = ({ type }: BreadcrumbProps) => {
    const index = breadcrumbPaths.findIndex((item) => item.label === type)
    const visibleItems = breadcrumbPaths.slice(0, index + 1)

    return (
        <nav aria-label='breadcrumb' className={styles.container}>
            <ol className={styles.list}>
                {visibleItems.map((item, index) => (
                    <li key={item.label} className={styles.item}>
                        {index > 0 && <span className={styles.divider}>/</span>}
                        <Link href={item.path} className={styles.link}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumb
