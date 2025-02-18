import { Switch } from '@mantine/core'
import { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { useSubscribe } from '@/hooks/useSubscribe'
import { BellIcon, SignOutIcon, SunIcon } from '@/public/icons'

import Alarm from '../Alarm'

import * as styles from './styles.css'

const SideFooter = () => {
    const { logout } = useAuth()
    const [isDarkMode, setIsDarkMode] = useState(false)
    const { isEnabled, toggleEnabled } = useSubscribe()

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

    return (
        <div>
            <footer className={styles.sideFooter}>
                <button className={styles.logoutButton} onClick={logout}>
                    <SignOutIcon className={styles.icon} />
                    <span>로그아웃</span>
                </button>

                <div className={styles.themeControl}>
                    <div className={styles.themeInfo}>
                        <BellIcon style={{ width: '20px', height: '20px' }} />
                        <span>점검알림</span>
                    </div>
                    <Switch checked={isEnabled} onChange={toggleEnabled} color='#f6475f' />
                </div>

                <div className={styles.themeControl}>
                    <div className={styles.themeInfo}>
                        <SunIcon className={styles.icon} />
                        <span>{isDarkMode ? '다크모드' : '라이트모드'}</span>
                    </div>
                    <Switch checked={isDarkMode} onChange={handleDarkModeClick} color='#f6475f' />
                </div>
            </footer>

            <Alarm />
        </div>
    )
}

export default SideFooter
