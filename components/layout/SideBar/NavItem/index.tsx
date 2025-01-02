import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import * as styles from './styles.css'

interface NavItemProps {
    label: string
    path: string
    iconSrc: string
}

const NavItem = ({ label, path, iconSrc }: NavItemProps) => {
    return (
        <li>
            <Link href={`${path}`} className={styles.navItem}>
                <Image src={iconSrc} alt={`${label} 아이콘`} width={20} height={20} />
                <span>{label}</span>
            </Link>
        </li>
    )
}

export default NavItem
