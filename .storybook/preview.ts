import React from 'react'

import { themeClass } from '@/styles/theme.css'

import type { Preview } from '@storybook/react'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [(Story) => React.createElement('div', { className: themeClass }, React.createElement(Story))],
}

export default preview
