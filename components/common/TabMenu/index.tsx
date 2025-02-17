'use client'

import { Tabs } from '@mantine/core'

import * as styles from './styles.css'

interface TabMenuProps {
    value: string
    onChange: (newValue: string | null) => void
}

const TabMenu = ({ value, onChange }: TabMenuProps) => {
    return (
        <div>
            <Tabs color='#ff385c' variant='pills' radius='xl' value={value} onChange={onChange}>
                <Tabs.List className={styles.tabsWrapper}>
                    <Tabs.Tab className={styles.tab} value='REQUIRED'>
                        점검 필요
                    </Tabs.Tab>
                    <Tabs.Tab className={styles.tab} value='SCHEDULED'>
                        점검 예정
                    </Tabs.Tab>
                    <Tabs.Tab className={styles.tab} value='INPROGRESS'>
                        점검 진행
                    </Tabs.Tab>
                    <Tabs.Tab className={styles.tab} value='COMPLETED'>
                        점검 완료
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </div>
    )
}

export default TabMenu
