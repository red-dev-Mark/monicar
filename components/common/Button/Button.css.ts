import { style } from '@vanilla-extract/css'

export const button = style({
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.2s',
})

export const primary = style({
    backgroundColor: '#007AFF',
    color: 'white',
    ':hover': {
        backgroundColor: '#0055FF',
    },
})

export const secondary = style({
    backgroundColor: 'red',
    color: 'white',
    ':hover': {
        backgroundColor: '#DDE2E6',
    },
})
