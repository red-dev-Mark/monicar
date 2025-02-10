import Image from 'next/image'
import { useEffect } from 'react'

import VehicleDetailCard from '@/app/(main)/location/components/VehicleDetailCard'
import Badge from '@/components/common/Badge'
import { OPERATION_STATUS } from '@/components/common/Badge/constants'
import { useVehicleDisclosure } from '@/hooks/useVehicleDisclosure'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { cleanUrlParams } from '@/lib/utils/url'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface ViewportVehicleListProps {
    clusterDetail: VehicleLocation[]
    selectedVehicleDetail: VehicleDetail | undefined
    onItemClick: (vehicleId: string, vehicleNumber: string) => void
}

const ViewportVehicleList = ({ clusterDetail, selectedVehicleDetail, onItemClick }: ViewportVehicleListProps) => {
    const { isSelectedVehicleVisible, hideSelectedVehicle, unselectVehicle } = useVehicleDisclosure()

    const hasVehicles = clusterDetail.length > 0

    useEffect(() => {
        return () => cleanUrlParams()
    }, [])

    const clearSelectedVehicle = () => {
        unselectVehicle()
        hideSelectedVehicle()
    }

    const getVehicleStatus = (status: keyof typeof OPERATION_STATUS) => {
        return OPERATION_STATUS[status] ?? '운행중'
    }

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>차량 목록</h2>
                <button className={styles.closeButton} aria-label='차량 상세 정보 닫기'>
                    <Image
                        src={'/icons/clear-icon.svg'}
                        width={36}
                        height={36}
                        alt='닫기 버튼'
                        style={{ width: '36px', height: '36px' }}
                    />
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
                            <div
                                key={cluster.vehicleId}
                                className={styles.vehicleItem}
                                onClick={() => onItemClick(cluster.vehicleId, cluster.vehicleNumber)}
                                role='presentation'
                            >
                                <Badge shape='circle' variant={getVehicleStatus(cluster.status!)} />
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

            {isSelectedVehicleVisible && (
                <VehicleDetailCard
                    vehicleDetail={selectedVehicleDetail as VehicleDetail}
                    onClose={clearSelectedVehicle}
                />
            )}
        </article>
    )
}

export default ViewportVehicleList
