import Link from 'next/link'

import * as styles from './styles.css'
import { breadcrumbConfig, BreadcrumbType } from './type'

interface BreadcrumbProps {
    type: BreadcrumbType
}

const Breadcrumb = ({ type }: BreadcrumbProps) => {
    const index = breadcrumbConfig.findIndex((item) => item.label === type)
    const visibleItems = breadcrumbConfig.slice(0, index + 1)

    return (
        <nav aria-label='breadcrumb' className={styles.container}>
            <ol className={styles.list}>
                {visibleItems.map((item, i) => (
                    <li key={item.label} className={styles.item}>
                        {i > 0 && <span className={styles.divider}>/</span>}
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
