import { useEffect, useState } from 'react'

import { NavigateIcon } from '@/public/icons'

import * as styles from './styles.css'

interface LiveModeProps {
    disabled: boolean
    onChange: (isClicked: boolean) => void
}

const LiveMode = ({ disabled, onChange }: LiveModeProps) => {
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
            disabled={disabled}
        >
            <NavigateIcon width={32} height={32} />
        </button>
    )
}

export default LiveMode
