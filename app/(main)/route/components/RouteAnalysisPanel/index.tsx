import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
// import RouteTimelineSection from '@/app/(main)/route/components/RouteTimelineSection'
import { LatLng, MapRefType } from '@/types/map'

import * as styles from './styles.css'

interface RouteAnalysisPanelProps {
    mapRef: MapRefType
    onRouteChange: (paths: LatLng[]) => void
}

const RouteAnalysisPanel = ({ mapRef, onRouteChange }: RouteAnalysisPanelProps) => {
    return (
        <div className={styles.panel}>
            <RouteSearchSection mapRef={mapRef} onRouteChange={onRouteChange} />
            {/* <RouteTimelineSection /> */}
        </div>
    )
}

export default RouteAnalysisPanel
