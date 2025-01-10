import { Switch as MantineSwitch } from '@mantine/core'

import { styles } from '@/styles/theme.css'

interface SwitchProps {
    size?: string
}

const Switch = ({ size = 'md', ...props }: SwitchProps) => {
    return <MantineSwitch size={size} color={styles.colors.primary} {...props} />
}

export default Switch
