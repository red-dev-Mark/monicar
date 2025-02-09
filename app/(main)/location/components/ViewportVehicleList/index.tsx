import Image from 'next/image'

import Badge from '@/components/common/Badge'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface ViewportVehicleListProps {
    clusterDetail: VehicleLocation[]
    onClose: () => void
}

const ViewportVehicleList = ({ clusterDetail, onClose }: ViewportVehicleListProps) => {
    const hasVehicles = clusterDetail.length > 0

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>차량 목록</h2>
                <button className={styles.closeButton} onClick={onClose} aria-label='차량 상세 정보 닫기'>
                    <Image src={'/icons/clear-icon.svg'} width={36} height={36} alt='닫기 버튼' />
                </button>
            </header>

            {hasVehicles ? (
                <main className={styles.vehicleList}>
                    <div className={styles.listHeader}>
                        총<span className={styles.vehicleCount}>{clusterDetail.length}</span>대의 차량
                    </div>

                    {clusterDetail.map((cluster) => {
                        const vehicleNumber = addSpaceVehicleNumber(cluster.vehicleNumber)

                        return (
                            <div key={cluster.vehicleId} className={styles.vehicleItem}>
                                <Badge shape='circle' variant='운행중' />
                                <p className={styles.vehicleNumber}>{vehicleNumber}</p>
                                <Image src={'/icons/right-icon.svg'} width={24} height={24} alt='자세히보기 버튼' />
                            </div>
                        )
                    })}
                </main>
            ) : (
                <div className={styles.emptyState}>
                    <p>현재 영역에서 찾은 차량이 없습니다</p>
                    <small>지도를 이동하여 차량을 찾아보세요</small>
                </div>
            )}
        </article>
    )
}

export default ViewportVehicleList
