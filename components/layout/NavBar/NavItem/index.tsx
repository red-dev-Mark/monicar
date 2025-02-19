'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import * as styles from './styles.css'

interface NavItemProps {
    label: string
    path: string
    icon: React.ReactNode
}

const NavItem = ({ label, path, icon }: NavItemProps) => {
    const pathname = usePathname()
    const isCurrentPage = pathname.startsWith(path)

    return (
        <li>
            <Link
                href={`${path}`}
                className={`
          ${styles.navItem}
          ${isCurrentPage ? styles.currentItem : ''}
        `}
            >
                <span> {icon}</span>
                <span>{label}</span>
            </Link>
        </li>
    )
}

export default NavItem
