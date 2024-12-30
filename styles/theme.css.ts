import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
    colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        background: '#ffffff',
        text: '#000000',
        gray: {
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
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
        small: '0.875rem', // 14px
        medium: '1rem', // 16px
        large: '1.25rem', // 20px
        xlarge: '1.5rem', // 24px
    },
});
