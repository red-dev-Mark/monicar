import type { Preview } from '@storybook/react'

import '@/styles/reset.css.ts'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export default preview
