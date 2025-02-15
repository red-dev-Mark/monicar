import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'

interface RankingModel {
    id: number
    ranking: string
    message: string
    isActive?: boolean
}

interface RankingProps {
    rankingData: RankingModel[]
    isLoading?: boolean
}
const Ranking = ({ rankingData, isLoading }: RankingProps) => {
    return (
        <div>
            <p className={styles.title}>주행거리 높은 순</p>
            <div className={styles.messageContainer}>
                <div className={styles.messageList}>
                    {rankingData.map((data) => (
                        <div key={data.id} className={styles.messageWrapper}>
                            <div>{data.ranking}</div>
                            {isLoading ? (
                                <Skeleton height={16} width='100%' />
                            ) : (
                                <div
                                    className={`${styles.message} ${data.isActive ? styles.activeMessageWrapper : styles.deactiveMessageWrapper}`}
                                >
                                    {data.message}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ranking
