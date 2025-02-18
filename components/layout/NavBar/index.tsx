'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Switch from '@/components/common/Switch'
import NavItem from '@/components/layout/NavBar/NavItem'
import { useAuth } from '@/hooks/useAuth'
import { HomeIcon, ListIcon, PinIcon, PointerIcon, SignOutIcon, SunIcon } from '@/public/icons'

import * as styles from './styles.css'

const NavBar = () => {
    const { logout } = useAuth()
    const [useEmail, setUserEmail] = useState<string>('')
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const useEmail = localStorage.getItem('email') || 'b6f2@monicar.com'
        setUserEmail(useEmail)
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [isDarkMode])

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true'
        setIsDarkMode(savedDarkMode)
    }, [])

    const handleDarkModeClick = () => {
        setIsDarkMode((previous) => {
            localStorage.setItem('darkMode', (!previous).toString())
            return !previous
        })
    }

    const navigationItems = [
        {
            label: '대시보드',
            path: '/dashboard',
            icon: <HomeIcon className={styles.icon} />,
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

            <footer className={styles.sideFooter}>
                <button className={styles.logoutButton} onClick={logout}>
                    <SignOutIcon className={styles.icon} />
                    <span>로그아웃</span>
                </button>
                <div className={styles.themeControl}>
                    <div className={styles.themeInfo}>
                        <SunIcon className={styles.icon} />
                        <span>{isDarkMode ? '다크모드' : '라이트모드'}</span>
                    </div>
                    <Switch checked={isDarkMode} onChange={handleDarkModeClick} />
                </div>
            </footer>
        </aside>
    )
}

export default NavBar
