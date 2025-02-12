import { Accordion as MantineAccordion } from '@mantine/core'

import * as styles from './styles.css'

type VariantType = 'primary' | 'secondary'

interface AccordionProps {
    variant?: VariantType
    title: string
    children: React.ReactNode
}

const Accordion = ({ variant = 'primary', title, children }: AccordionProps) => {
    return (
        <MantineAccordion defaultValue={title} className={styles.accordion} unstyled>
            <MantineAccordion.Item value={title}>
                <MantineAccordion.Control
                    className={`${styles.baseControl} ${variant === 'primary' ? styles.primaryControl : styles.secondaryControl}`}
                >
                    {title}
                </MantineAccordion.Control>
                <MantineAccordion.Panel>{children}</MantineAccordion.Panel>
            </MantineAccordion.Item>
        </MantineAccordion>
    )
}

export default Accordion
