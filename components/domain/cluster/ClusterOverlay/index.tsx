import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import ClusterMarker from '@/components/domain/cluster/ClusterMarker'
import { MAP_CONFIG } from '@/constants/map'
import { TransformedClusterInfo } from '@/types/cluster'
import { LatLng } from '@/types/map'

interface ClusterOverlayProps {
    level: number
    clusterInfo: TransformedClusterInfo[]
    onClick: (location: LatLng, level: number) => void
}

const ClusterOverlay = ({ level, clusterInfo, onClick }: ClusterOverlayProps) => {
    if (level <= MAP_CONFIG.CLUSTER.VISIBLE_LEVEL) return

    return clusterInfo.map((cluster, index) => {
        return (
            <CustomOverlayMap key={index} position={{ lat: cluster.coordinate.lat, lng: cluster.coordinate.lng }}>
                <ClusterMarker
                    count={cluster.count}
                    onClick={() =>
                        onClick(
                            {
                                lat: cluster.coordinate.lat,
                                lng: cluster.coordinate.lng,
                            },
                            level - MAP_CONFIG.CLUSTER.ZOOM_INCREMENT,
                        )
                    }
                />
            </CustomOverlayMap>
        )
    })
}

export default ClusterOverlay
