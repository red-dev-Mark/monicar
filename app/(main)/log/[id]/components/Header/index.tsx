import Breadcrumbs from '@/components/common/Breadcrumbs'

import * as styles from './styles.css'

const Header = () => {
    return (
        <div>
            <div className={styles.breadcrumbsWrapper}>
                <Breadcrumbs
                    breadcrumbsData={[
                        { title: '운행기록', isActive: false },
                        { title: '운행일지', isActive: true },
                    ]}
                />
            </div>
        </div>
    )
}

export default Header
