import { Switch as MantineSwitch } from '@mantine/core'

import { vars } from '@/styles/theme.css'

interface SwitchProps {
    size?: string
}

const Switch = ({ size = 'md', ...props }: SwitchProps) => {
    return <MantineSwitch size={size} color={vars.colors.primary} {...props} />
}

export default Switch
