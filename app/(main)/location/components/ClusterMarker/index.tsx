import { getMarkerColor } from '@/lib/utils/map'
import { vars } from '@/styles/theme.css'

interface ClusterMarkerProps {
    count: number
    onClick?: () => void
}

const ClusterMarker = ({ count, onClick }: ClusterMarkerProps) => {
    const colors = getMarkerColor(count)

    return (
        <div
            style={{
                width: '56px',
                height: '56px',
                backgroundColor: colors.outer,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                onClick={onClick}
                style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: colors.inner,
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: vars.colors.black,
                    fontSize: vars.fontSizes.small,
                    fontWeight: vars.fontWeights.bold,
                }}
                role='presentation'
            >
                {count.toLocaleString()}
            </div>
        </div>
    )
}

export default ClusterMarker
