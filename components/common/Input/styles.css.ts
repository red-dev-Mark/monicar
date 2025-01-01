import { styleVariants } from '@vanilla-extract/css'

import { InputSizeType } from './types'

export const inputStyle: Record<InputSizeType, string> = styleVariants({
    small: {
        padding: '18px 16px',
        borderRadius: '25px',
        border: '1px solid #EBEBEB',
        fontSize: '16px',
        transition: 'background-color 0.2s',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.04)',
        width: '302px',
        height: '48px',
    },
    medium: {
        padding: '18px 16px',
        borderRadius: '25px',
        border: '1px solid #EBEBEB',
        fontSize: '16px',
        transition: 'background-color 0.2s',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.04)',
        width: '342px',
        height: '60px',
    },
    large: {
        padding: '18px 16px',
        borderRadius: '25px',
        border: '1px solid #EBEBEB',
        fontSize: '16px',
        transition: 'background-color 0.2s',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.04)',
        width: '358px',
        height: '48px',
    },
})
