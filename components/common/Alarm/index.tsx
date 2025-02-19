import { useSubscribe } from '@/hooks/useSubscribe'

import InspectionStatusAlarm from '../InspectionStatusAlarm'

const Alarm = () => {
    const { alarm, error } = useSubscribe()
    const isOpen = true

    if (error) {
        console.error('SubscribeAlert 에러', error)
    }

    return (
        <div>
            <InspectionStatusAlarm inspectionStatusData={alarm} isOpen={isOpen} />
        </div>
    )
}

export default Alarm
