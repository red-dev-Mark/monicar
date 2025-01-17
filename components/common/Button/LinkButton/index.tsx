import Link from 'next/link'
import { ComponentProps } from 'react'

interface LinkButtonProps extends Omit<ComponentProps<typeof Link>, 'href'> {
    href: string
    children: React.ReactNode
    className?: string
}

const LinkButton = ({ href, children, className, ...props }: LinkButtonProps) => {
    return (
        <Link href={href} className={className} role='button' {...props}>
            {children}
        </Link>
    )
}

export default LinkButton
