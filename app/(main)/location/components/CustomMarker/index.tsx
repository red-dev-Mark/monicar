import { vars } from '@/styles/theme.css'

interface CustomMarkerProps {
    count: number
    onClick?: () => void
}

const CustomMarker = ({ count, onClick }: CustomMarkerProps) => {
    return (
        <div
            style={{
                width: '54px',
                height: '54px',
                backgroundColor: '#fdced440',
                // backgroundColor: colors.outer,
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
                    backgroundColor: '#fdced480',
                    // backgroundColor: colors.inner,
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
