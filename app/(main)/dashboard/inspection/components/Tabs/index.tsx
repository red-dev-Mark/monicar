import { Tabs } from '@mantine/core'

const TabMenu = () => {
    return (
        <Tabs color='#ff385c' variant='pills' radius='xl' defaultValue='required'>
            <Tabs.List>
                <Tabs.Tab value='required'>점검 필요</Tabs.Tab>
                <Tabs.Tab value='scheduled'>점검 예정</Tabs.Tab>
                <Tabs.Tab value='inProgress'>점검 진행</Tabs.Tab>
                <Tabs.Tab value='completed'>점검 완료</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='required'>required</Tabs.Panel>

            <Tabs.Panel value='scheduled'>scheduled</Tabs.Panel>

            <Tabs.Panel value='inProgress'>inProgress</Tabs.Panel>
            <Tabs.Panel value='completed'>completed</Tabs.Panel>
        </Tabs>
    )
}

export default TabMenu
