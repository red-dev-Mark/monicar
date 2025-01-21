import '@/styles'
import { layoutContainer, mainContent } from '@/styles/layout.css'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={layoutContainer}>
            <main className={mainContent}>{children}</main>
        </div>
    )
}

export default AuthLayout
