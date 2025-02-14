import { Tabs } from '@mantine/core'
import { useState } from 'react'

const TabMenu = () => {
    const [activeTab, setActiveTab] = useState<string | null>('REQUIRED')

    return (
        <Tabs color='#ff385c' variant='pills' radius='xl' value={activeTab} onChange={setActiveTab}>
            <Tabs.List>
                <Tabs.Tab value='REQUIRED'>점검 필요</Tabs.Tab>
                <Tabs.Tab value='SCHEDULED'>점검 예정</Tabs.Tab>
                <Tabs.Tab value='INPROGRESS'>점검 진행</Tabs.Tab>
                <Tabs.Tab value='COMPLETED'>점검 완료</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='REQUIRED'>required</Tabs.Panel>
            <Tabs.Panel value='SCHEDULED'>scheduled</Tabs.Panel>
            <Tabs.Panel value='INPROGRESS'>inProgress</Tabs.Panel>
            <Tabs.Panel value='COMPLETED'>completed</Tabs.Panel>
        </Tabs>
    )
}

export default TabMenu
