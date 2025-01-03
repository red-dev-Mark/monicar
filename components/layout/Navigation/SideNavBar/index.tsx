import Image from 'next/image'
import React from 'react'

import Switch from '@/components/common/Switch'
import NavItem from '@/components/layout/Navigation/SideNavBar/NavItem'
import { navigationItems } from '@/constants/navigation'

import * as styles from './styles.css'

const SideNavBar = () => {
    return (
        <aside className={styles.sideNav}>
            <nav className={styles.navContainer}>
                <div className={styles.logoWrapper}>
                    <Image src='/box-logo.png' alt='박스 로고 이미지' width={48} height={48} />
                    <div className={styles.logoInfo}>
                        <Image src='/text-logo.png' alt='텍스트 로고 이미지' width={104} height={22} />
                        {/* TODO: 실제 유저 이메일로 교체 예정 */}
                        <p className={styles.userEmail}>socar@gmail.com</p>
                    </div>
                </div>

                <ul className={styles.navList}>
                    {navigationItems.map((navItem, index) => (
                        <NavItem key={index} label={navItem.label} path={navItem.path} iconSrc={navItem.iconSrc} />
                    ))}
                </ul>
            </nav>

            <footer className={styles.sideFooter}>
                <NavItem label='로그아웃' path='/logout' iconSrc='/icons/sign-out-icon.svg' />
                <div className={styles.themeControl}>
                    <div className={styles.themeInfo}>
                        <Image src='/icons/sun-icon.svg' alt='아이콘' width={20} height={20} />
                        <span>라이트모드</span>
                    </div>
                    <Switch />
                </div>
            </footer>
        </aside>
    )
}

export default SideNavBar
