import { createGlobalTheme, createVar, globalStyle } from '@vanilla-extract/css'

export const fontFamily = {
    nanumSquareNeo: createVar(),
    airbnbCereal: createVar(),
}

createGlobalTheme(':root', {
    [fontFamily.nanumSquareNeo]: `'NanumSquareNeo', sans-serif`,
    [fontFamily.airbnbCereal]: `'AirbnbCereal', sans-serif`,
})

globalStyle('body', {
    fontFamily: '"Nanum Square Neo", "Airbnb Cereal", system-ui, sans-serif',
    backgroundColor: 'black',
    color: 'white',
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
