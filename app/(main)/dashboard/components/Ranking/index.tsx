import { Skeleton } from '@mantine/core'

import * as styles from './styles.css'
import { useRankingData } from './useRankingData'

const Ranking = () => {
    const { rankingData, isLoading, error } = useRankingData()
    // const [active, setActive] = useState(0)

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setActive((current) => (current + 1) % 3)
    //     }, 3000)

    //     return () => clearInterval(timer)
    // }, [])

    if (error) {
        return
    }

    return (
        <div>
            <p className={styles.title}>주행거리 높은 순</p>
            <div className={styles.messageContainer}>
                <div className={styles.messageList}>
                    {rankingData?.map((data) => (
                        <div key={data.id} className={styles.messageWrapper}>
                            <div>
                                {data.vehicleNumber} {data.distance}
                            </div>
                            {isLoading ? <Skeleton height={16} width='100%' /> : <div></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ranking
