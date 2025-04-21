import { useEffect, useState } from 'react'

import { NavigateIcon } from '@/public/icons'

import * as styles from './styles.css'

interface LiveModeProps {
    onChange: (isClicked: boolean) => void
}

const LiveMode = ({ onChange }: LiveModeProps) => {
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        onChange(isClicked)
    }, [isClicked])

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <button
            className={`${styles.container} ${isClicked ? styles.clicked : ''}`}
            onClick={handleClick}
            aria-label='Live Mode'
        >
            <NavigateIcon width={32} height={32} />
        </button>
    )
}

export default LiveMode
