import { getMarkerColor } from '@/lib/utils/map'
import { vars } from '@/styles/theme.css'

interface CustomMarkerProps {
    count: number
    onClick?: () => void
}

const CustomMarker = ({ count, onClick }: CustomMarkerProps) => {
    const colors = getMarkerColor(count)

    return (
        <div
            style={{
                width: '54px',
                height: '54px',
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
                    width: '40px',
                    height: '40px',
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
                {count}
            </div>
        </div>
    )
}

export default CustomMarker
