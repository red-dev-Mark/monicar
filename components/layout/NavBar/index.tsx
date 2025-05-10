'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import SideFooter from '@/components/common/SideFooter'
import NavItem from '@/components/layout/NavBar/NavItem'
import { HomeIcon, ListIcon, NavIcon, PinIcon, PointerIcon } from '@/public/icons'

import * as styles from './styles.css'

const NavBar = () => {
    const [useEmail, setUserEmail] = useState<string>('')

    useEffect(() => {
        const useEmail = localStorage.getItem('email') || 'b6f2@monicar.com'
        setUserEmail(useEmail)
    }, [])

    const navigationItems = [
        {
            label: '대시보드',
            path: '/dashboard',
            icon: <HomeIcon className={styles.icon} />,
        },
        {
            label: '차량현황',
            path: '/live',
            icon: <NavIcon className={styles.icon} />,
        },
        {
            label: '위치조회',
            path: '/location',
            icon: <PinIcon className={styles.icon} />,
        },
        {
            label: '경로조회',
            path: '/route',
            icon: <PointerIcon className={styles.icon} />,
        },
        {
            label: '운행기록',
            path: '/log',
            icon: <ListIcon className={styles.icon} />,
        },
    ] as const

    return (
        <aside className={styles.navbar}>
            <nav className={styles.navContainer}>
                <div className={styles.logoWrapper}>
                    <Image src='/box-logo.png' alt='박스 로고 이미지' width={48} height={48} priority />
                    <div className={styles.logoInfo}>
                        <Image
                            src='/text-logo.png'
                            alt='텍스트 로고 이미지'
                            width={104}
                            height={22}
                            priority
                            style={{ width: '104px', height: '22px' }}
                        />
                        <p className={styles.userEmail}>{useEmail}</p>
                    </div>
                </div>

                <ul className={styles.navList}>
                    {navigationItems.map((navItem, index) => (
                        <NavItem key={index} label={navItem.label} path={navItem.path} icon={navItem.icon} />
                    ))}
                </ul>
            </nav>

            <SideFooter />
        </aside>
    )
}

export default NavBar
