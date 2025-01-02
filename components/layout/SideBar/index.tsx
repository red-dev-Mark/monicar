import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import NavItem from '@/components/layout/SideBar/NavItem'

import * as styles from './styles.css'

const Sidebar = () => {
    const navItems = [
        { label: '대시 보드', path: '/', iconSrc: '/icons/sun-icon.svg' },
        { label: '위치 조회', path: '/', iconSrc: '/icons/sun-icon.svg' },
        { label: '경로 조회', path: '/', iconSrc: '/icons/sun-icon.svg' },
        { label: '운행 일지', path: '/', iconSrc: '/icons/sun-icon.svg' },
        { label: '운행 내역', path: '/', iconSrc: '/icons/sun-icon.svg' },
    ]

    return (
        <aside className={styles.sideNav}>
            <nav className={styles.mainNav}>
                <div className={styles.logoWrapper}>
                    <Image src='/box-logo.png' alt='로고 이미지' width={44} height={44} />
                    <div className={styles.logoInfo}>
                        <h1 className={styles.logoName}>monicar</h1>
                        <p className={styles.userEmail}>socar@gmail.com</p>
                    </div>
                </div>

                <ul className={styles.navList}>
                    {navItems.map((navItem, index) => (
                        <NavItem key={index} label={navItem.label} path={navItem.path} iconSrc={navItem.iconSrc} />
                    ))}
                </ul>
            </nav>

            <footer className={styles.sideFooter}>
                <Link href='/logout' className={styles.navItem}>
                    <Image src='/icons/sun-icon.svg' alt='아이콘' width={20} height={20} />
                    <span>로그아웃</span>
                </Link>

                <div className={styles.themeControl}>
                    <div className={styles.themeInfo}>
                        <Image src='/icons/sun-icon.svg' alt='아이콘' width={20} height={20} />
                        <span>라이트모드</span>
                    </div>
                    <button className={styles.themeToggle}>
                        <span className={styles.themeIndicator}></span>
                    </button>
                </div>
            </footer>
        </aside>
    )
}

export default Sidebar
