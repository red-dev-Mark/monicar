import Link from 'next/link'
import { ComponentProps } from 'react'

import { BaseButton } from '../BaseButton'

import * as styles from './styles.css'

interface LinkButtonProps extends Omit<ComponentProps<typeof Link>, 'href'> {
    href: string
}

const LinkButton = ({ href }: LinkButtonProps) => {
    return (
        <Link href={href} className={styles.container}>
            <BaseButton />
        </Link>
    )
}

export default LinkButton
