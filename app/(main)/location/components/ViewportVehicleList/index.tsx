import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import VehicleDetailCard from '@/app/(main)/location/components/VehicleDetailCard'
import Badge from '@/components/common/Badge'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useMapStatus } from '@/hooks/useMapStatus'
import { vehicleService } from '@/lib/apis'
import { addSpaceVehicleNumber, removeSpaces, trimValue } from '@/lib/utils/string'
import { cleanUrlParams } from '@/lib/utils/url'
import { MapRefType } from '@/types/map'
import { VehicleDetail, VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface ViewportVehicleListProps {
    mapRef: MapRefType
    clusterDetail: VehicleLocation[]
}

const ViewportVehicleList = ({ mapRef, clusterDetail }: ViewportVehicleListProps) => {
    const [vehicleDetail, setVehicleDetail] = useState<VehicleDetail | undefined>()
    const [isVehicleDetailCardVisible, { open: showVehicleDetailCard, close: hideVehicleDetailCard }] = useDisclosure()

    const { controlMapStatus } = useMapStatus(mapRef.current)

    const router = useRouter()
    const searchParams = useSearchParams()

    const hasVehicles = clusterDetail.length > 0

    useEffect(() => {
        return () => cleanUrlParams()
    }, [])

    const handleVehicleItemClick = async (vehicleId: string, vehicleNumber: string) => {
        const vehicleDetail = await vehicleService.getVehicleDetail(vehicleId)

        // TODO: 지금 API 응답 위치가 다름
        // const {
        //     recentCycleInfo: { lat, lng },
        // } = vehicleDetail

        const params = new URLSearchParams(searchParams)
        params.set('vehicleNumber', removeSpaces(trimValue(vehicleNumber)))
        router.replace(`/location?${params.toString()}`)

        setVehicleDetail(vehicleDetail)
        showVehicleDetailCard()

        // TODO: 지금 API 응답 위치가 다름
        // controlMapStatus({
        //     lat: normalizeCoordinate(lat),
        //     lng: normalizeCoordinate(lng),
        // })

        // TODO: 지금 API 응답 위치가 다름
        const filteredCoord = clusterDetail.filter((cluster) => {
            return cluster.vehicleId === vehicleId
        })
        // TODO: 지금 API 응답 위치가 다름
        controlMapStatus({
            lat: filteredCoord[0].coordinate.lat,
            lng: filteredCoord[0].coordinate.lng,
        })
    }

    const cleanVehicleDetailCard = () => {
        cleanUrlParams()
        hideVehicleDetailCard()
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
                                onClick={() => handleVehicleItemClick(cluster.vehicleId, cluster.vehicleNumber)}
                                role='presentation'
                            >
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

            {isVehicleDetailCardVisible && (
                <VehicleDetailCard vehicleDetails={vehicleDetail as VehicleDetail} onClose={cleanVehicleDetailCard} />
            )}
        </article>
    )
}

export default ViewportVehicleList
