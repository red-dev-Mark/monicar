import { useSubscribe } from '@/hooks/useSubscribe'

import InspectionStatusAlarm from '../InspectionStatusAlarm'

const Alarm = () => {
    const { alarm, error, isEnabled, toggleEnabled } = useSubscribe()

    if (error) {
        console.error('SubscribeAlert 에러', error)
    }

    if (!isEnabled) return null

    return (
        <div>
            <InspectionStatusAlarm inspectionStatusData={alarm} onClose={toggleEnabled} />
        </div>
    )
}

export default Alarm
