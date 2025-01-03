import { style } from '@vanilla-extract/css'

export const layoutContainer = style({
    display: 'flex',
    minHeight: '100vh',
})

export const mainContent = style({
    flex: 1,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("/images/sign-in-background-desktop.jpg")',
})
