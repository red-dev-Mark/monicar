import type { Preview } from '@storybook/react'
import '@/styles/font.css'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        viewport: {
            viewports: {
                mobile: {
                    name: 'Mobile',
                    styles: {
                        width: '390px',
                        height: '844px',
                    },
                },
                tablet: {
                    name: 'Tablet',
                    styles: {
                        width: '768px',
                    },
                },
                desktop: {
                    name: 'Desktop',
                    styles: {
                        width: '1024px',
                    },
                },
            },
        },
    },
}

export default preview
