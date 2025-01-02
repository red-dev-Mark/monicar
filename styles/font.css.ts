import { globalFontFace } from '@vanilla-extract/css'

export const FONT_FAMILY = {
    airbnbCereal: 'airbnbCereal',
    nanumSquareNeo: 'nanumSquareNeo',
} as const

export const FONT_WEIGHT = {
    light: '300',
    regular: '400',
    bold: '700',
    extraBold: '800',
} as const

globalFontFace(FONT_FAMILY.airbnbCereal, [
    {
        src: 'url("/fonts/AirbnbCereal/AirbnbCereal_W_Md.otf")',
        fontWeight: FONT_WEIGHT.regular,
    },
    {
        src: 'url("/fonts/AirbnbCereal/AirbnbCereal_W_Bd.otf")',
        fontWeight: FONT_WEIGHT.bold,
    },
])

globalFontFace(FONT_FAMILY.nanumSquareNeo, [
    {
        src: 'url("/fonts/NanumSquareNeo/NanumSquareNeoTTF-aLt.woff2")',
        fontWeight: FONT_WEIGHT.light,
    },
    {
        src: 'url("/fonts/NanumSquareNeo/NanumSquareNeoTTF-bRg.woff2")',
        fontWeight: FONT_WEIGHT.regular,
    },
    {
        src: 'url("/fonts/NanumSquareNeo/NanumSquareNeoTTF-dEb.woff2")',
        fontWeight: FONT_WEIGHT.bold,
    },
    {
        src: 'url("/fonts/NanumSquareNeo/NanumSquareNeoTTF-eHv.woff2")',
        fontWeight: FONT_WEIGHT.extraBold,
    },
])
