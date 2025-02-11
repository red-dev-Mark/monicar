import RouteSearchSection from '@/app/(main)/route/components/RouteSearchSection'
// import RouteTimelineSection from '@/app/(main)/route/components/RouteTimelineSection'
import { LatLng, MapRefType } from '@/types/map'

import * as styles from './styles.css'

interface RouteAnalysisPanelProps {
    mapRef: MapRefType
    onRoutesChange: (paths: LatLng[]) => void
}

const RouteAnalysisPanel = ({ mapRef, onRoutesChange }: RouteAnalysisPanelProps) => {
    return (
        <div className={styles.panel}>
            <RouteSearchSection mapRef={mapRef} onRoutesChange={onRoutesChange} />
            {/* <RouteTimelineSection /> */}
        </div>
    )
}

export default RouteAnalysisPanel
