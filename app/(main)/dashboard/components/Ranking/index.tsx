import { useEffect, useState } from 'react'

import RankingSkeleton from '@/components/common/Skeleton/RankingSkeleton'

import * as styles from './styles.css'
import { useRankingData } from './useRankingData'

const Ranking = () => {
    const { rankingData = [], isLoading, error } = useRankingData()
    const [active, setActive] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((current) => (current + 1) % rankingData?.length)
        }, 3000)

        return () => clearInterval(timer)
    }, [rankingData])

    const medalRanking = (index: number) => {
        switch (index) {
            case 0:
                return '🥇'
            case 1:
                return '🥈'
            case 2:
                return '🥉'
            default:
                return ''
        }
    }

    if (error) {
        return null
    }

    return (
        <div>
            <p className={styles.title}>주행거리 높은 순</p>
            <div className={styles.messageContainer}>
                <div className={styles.messageList}>
                    {isLoading ? (
                        <>
                            <RankingSkeleton />
                        </>
                    ) : (
                        rankingData?.map((data, index) => (
                            <div
                                key={data.id}
                                className={`${styles.messageWrapper} ${
                                    index === active ? styles.activeMessageWrapper : ''
                                }`}
                            >
                                <div className={styles.message}>
                                    <span>{medalRanking(index)}</span>
                                    <span>{data.vehicleNumber}</span>
                                    <span className={styles.distance}>{data.distance.toLocaleString('ko-KR')}km</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Ranking
