import { styleVariants } from '@vanilla-extract/css'

import { InputSizeType } from './types'

const baseInputStyle = {
    padding: '18px 16px',
    borderRadius: '25px',
    border: '1px solid #EBEBEB',
    fontSize: '16px',
    transition: 'background-color 0.2s',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.04)',
}

export const inputStyle: Record<InputSizeType, string> = styleVariants({
    small: {
        ...baseInputStyle,
        width: '302px',
        height: '48px',
    },
    medium: {
        ...baseInputStyle,
        width: '342px',
        height: '60px',
    },
    large: {
        ...baseInputStyle,
        width: '358px',
        height: '48px',
    },
})
