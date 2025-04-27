import { useSubscribe } from '@/hooks/useSubscribe'

import InspectionStatusAlarm from '../InspectionStatusAlarm'

const Alarm = () => {
    const { alarm, error } = useSubscribe()
    // const isOpen = true

    if (error) {
        return
    }

    return (
        <div>
            <InspectionStatusAlarm inspectionStatusData={alarm} />
        </div>
    )
}

export default Alarm
