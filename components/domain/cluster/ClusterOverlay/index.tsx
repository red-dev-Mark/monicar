import { CustomOverlayMap } from 'react-kakao-maps-sdk'

import ClusterMarker from '@/components/domain/cluster/ClusterMarker'
import { MAP_CONFIG } from '@/constants/map'
import { TransformedClusterInfo } from '@/types/cluster'
import { LatLng, MapState } from '@/types/map'

interface ClusterOverlayProps {
    mapState: MapState
    clusterInfo: TransformedClusterInfo[]
    onClusterClick: (level: number, location: LatLng) => void
}

const ClusterOverlay = ({ mapState, clusterInfo, onClusterClick }: ClusterOverlayProps) => {
    if (mapState.level <= MAP_CONFIG.CLUSTER.VISIBLE_LEVEL) return

    return clusterInfo.map((cluster, index) => {
        return (
            <CustomOverlayMap key={index} position={{ lat: cluster.coordinate.lat, lng: cluster.coordinate.lng }}>
                <ClusterMarker
                    count={cluster.count}
                    onClick={() =>
                        onClusterClick(mapState.level - MAP_CONFIG.CLUSTER.ZOOM_INCREMENT, {
                            lat: cluster.coordinate.lat,
                            lng: cluster.coordinate.lng,
                        })
                    }
                />
            </CustomOverlayMap>
        )
    })
}

export default ClusterOverlay
