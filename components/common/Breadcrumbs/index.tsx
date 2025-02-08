import * as styles from './styles.css'

interface BreadcrumbsModel {
    title: string
    isActive: boolean
}
interface BreadcrumbsProps {
    breadcrumbsData: BreadcrumbsModel[]
}

const Breadcrumbs = ({ breadcrumbsData }: BreadcrumbsProps) => {
    return (
        <ul className={styles.list} aria-label='breadcrumbs'>
            {breadcrumbsData.map((data) => (
                <li key={data.title} className={`${styles.item} ${data.isActive ? styles.activeItem : ''}  `}>
                    {data.title}
                </li>
            ))}
        </ul>
    )
}

export default Breadcrumbs
