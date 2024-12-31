import { globalFontFace } from '@vanilla-extract/css'

const airbnbCereal = 'airbnbCereal'
const nanumSquareNeo = 'nanumSquareNeo'

globalFontFace(airbnbCereal, [
    {
        src: 'url("/AirbnbCereal/AirbnbCereal_W_Lt.otf")',
        fontWeight: 'light',
    },
    {
        src: 'url("/AirbnbCereal/AirbnbCereal_W_Bk.otf")',
        fontWeight: 'regular',
    },
    {
        src: 'url("/AirbnbCereal/AirbnbCereal_W_Md.otf")',
        fontWeight: 'medium',
        fontStyle: 'normal',
    },
    {
        src: 'url("/AirbnbCereal/AirbnbCereal_W_Bd.otf")',
        fontWeight: 'bold',
    },
    {
        src: 'url("/AirbnbCereal/AirbnbCereal_W_Xbd.otf")',
        fontWeight: 'xbold',
    },
    {
        src: 'url("/AirbnbCereal/AirbnbCereal_W_Blk.otf")',
        fontWeight: 'xxbold',
    },
])

globalFontFace(nanumSquareNeo, [
    {
        src: 'url("/NanumSquareNeo/NanumSquareNeoTTF-aLt.woff2")',
        fontWeight: 'light',
    },
    {
        src: 'url("/NanumSquareNeo/NanumSquareNeoTTF-bRg.woff2")',
        fontWeight: 'regular',
    },
    {
        src: 'url("/NanumSquareNeo/NanumSquareNeoTTF-cBd.woff2")',
        fontWeight: 'bold',
        fontStyle: 'normal',
    },
    {
        src: 'url("/NanumSquareNeo/NanumSquareNeoTTF-dEb.woff2")',
        fontWeight: 'xbold',
    },
    {
        src: 'url("/NanumSquareNeo/NanumSquareNeoTTF-eHv.woff2")',
        fontWeight: 'heavy',
    },
])
