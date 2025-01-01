import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
    margin: 0,
    padding: 0,
})

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
})

globalStyle('html, body', {
    height: '100%',
    width: '100%',
})

globalStyle('body', {
    WebkitFontSmoothing: 'antialiased',
})

globalStyle('img, picture, video, canvas, svg', {
    display: 'block',
    maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
    font: 'inherit',
})
