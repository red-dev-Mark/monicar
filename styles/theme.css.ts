import { createTheme } from '@vanilla-extract/css'

export const [themeClass, styles] = createTheme({
    colors: {
        primary: '#ff385c',
        secondaryPrimary: '#f6475f', // 라이트모드
        secondary: '#5856D6',
        white: '#ffffff',
        black: '#222222', // 기본 텍스트 색상
        dark: '#121212', // 다크모드 배경 색상
        error: '#c13515', // 에러 색상
        red: '#df0404', // 레드 뱃지색상
        pink: {
            100: '#fbf0f3', // 핑크 뱃지 배경 색상
            200: '#fae3e6', // 차량현황 알림 배경 색상
            300: '#ffe9e9', // 레드 뱃지 배경 색상
            400: '#f6d7df', // 차량현황 색상
            500: '#fdced4', // 클러스트링 색상
            600: '#d03660', // 핑크 뱃지 색상
            700: '#cf6b81', // 차량현황 알림 아이콘 색상
        },
        yellow: {
            100: '#fdf4e0', // 차량현황 알림 배경 색상
            200: '#ed9684', // 차량현황 알림 아이콘 색상
        },
        green: {
            100: '#e1fbe8', // 차량현황 알림 배경 색상
            200: '#a6e7d8', // 그린 뱃지 배경 색상
            300: '#6dc271', // 차량현황 알림 아이콘 색상
            400: '#00b087', // 그린 뱃지 색상
            500: '#008a85', // 차량현황 색상
        },
        blue: '#004cc4',
        purple: {
            100: '#f2e9fd',
            200: '#ad8cdb',
        },

        gray: {
            50: '#f6f6f6', // 호버 색상
            100: '#f7f7f7', // 테이블 배경 색상
            200: '#ebebeb',
            300: '#dddddd', // 테이블 선 색상
            400: '#d3d3d3',
            500: '#c2c2c2',
            600: '#b0b0b0', // 스크롤 색상
            700: '#717171',
            800: '#5e5e5e',
        },
    },
    space: {
        none: '0',
        small: '0.5rem', // 8px
        medium: '1rem', // 16px
        large: '1.5rem', // 24px
        xlarge: '2rem', // 32px
    },
    fontSizes: {
        small: '0.75rem', // 12px
        medium: '1rem', // 16px
        large: '1.25rem', // 20px
        xlarge: '1.5rem', // 24px
        xxlarge: '2.5rem', // 40px
    },
    font: {
        body: 'nanumSquareNeo',
    },
})
