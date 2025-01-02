import { globalStyle } from '@vanilla-extract/css'

globalStyle('body', {
    fontFamily: 'nanumSquareNeo, airbnbCereal, sans-serif',
    // fontFamily: '"Nanum Square Neo", sans-serif',
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
