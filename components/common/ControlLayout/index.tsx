import * as styles from './styles.css'

interface ControlLayoutProps {
    control: React.ReactNode
    primaryButton: React.ReactNode
    secondaryButton?: React.ReactNode
}

const ControlLayout = ({ control, primaryButton, secondaryButton }: ControlLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.controlWrapper}>{control}</div>
            <div className={styles.buttonGroup}>
                {primaryButton}
                {secondaryButton}
            </div>
        </div>
    )
}

export default ControlLayout
