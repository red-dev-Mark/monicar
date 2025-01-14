import { globalStyle } from '@vanilla-extract/css'

import { FONT_WEIGHT } from '@/styles/font.css'

globalStyle('body', {
    fontFamily: 'airbnbCereal, nanumSquareNeo, sans-serif !important',
    fontWeight: FONT_WEIGHT.regular,
})

globalStyle('a', {
    color: 'inherit',
    textDecoration: 'none',
})

globalStyle('button', {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
    margin: 0,
    padding: 0,
    font: 'inherit',
    verticalAlign: 'baseline',
})
