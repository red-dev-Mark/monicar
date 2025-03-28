import '@/styles'
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core'

import TanStackProvider from '@/lib/TanStackProvider'

import type { Metadata } from 'next'

import '@mantine/core/styles.css'

export const metadata: Metadata = {
    title: 'monicar',
    description: '실시간 차량 모니터링 관제 플랫폼',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const theme = createTheme({
        cursorType: 'pointer',
    })

    return (
        <html lang='ko' className='trancy-ko' {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <TanStackProvider>
                    <MantineProvider theme={theme}>
                        {children}
                        <div id='modal-root'></div>
                    </MantineProvider>
                </TanStackProvider>
            </body>
        </html>
    )
}

export default RootLayout
