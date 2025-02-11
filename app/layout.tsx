import '@/styles'
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import type { Metadata } from 'next'

import '@mantine/core/styles.css'

export const metadata: Metadata = {
    title: 'monicar',
    description: '실시간 차량 모니터링 관제 플랫폼',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='ko' className='trancy-ko' {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider>
                    <Notifications position='bottom-right' zIndex={10} />
                    {children}
                    <div id='modal-root'></div>
                </MantineProvider>
            </body>
        </html>
    )
}

export default RootLayout
