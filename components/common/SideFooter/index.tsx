import { Switch } from '@mantine/core'
import { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { SignOutIcon, SunIcon } from '@/public/icons'

import * as styles from './styles.css'

const SideFooter = () => {
    const { logout } = useAuth()
    const [isDarkMode, setIsDarkMode] = useState(false)

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
                        <SunIcon className={styles.icon} />
                        <span>{isDarkMode ? '다크모드' : '라이트모드'}</span>
                    </div>
                    <Switch checked={isDarkMode} onChange={handleDarkModeClick} />
                </div>
            </footer>
        </div>
    )
}

export default SideFooter
