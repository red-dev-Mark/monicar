import { useState } from 'react'

import { NavigateIcon } from '@/public/icons'

import * as styles from './styles.css'

const LiveMode = () => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <button
            className={`${styles.container} ${isClicked ? styles.clicked : ''}`}
            onClick={handleClick}
            aria-label='Live Mode'
        >
            <NavigateIcon className={styles.icon} />
        </button>
    )
}

export default LiveMode
