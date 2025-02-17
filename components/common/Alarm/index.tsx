import { useState } from 'react'

import { useSubscribe } from '@/hooks/useSubscribe'

import InspectionStatusAlarm from '../InspectionStatusAlarm'

const Alarm = () => {
    const { alarm, error } = useSubscribe()
    const [isOpen, setIsOpen] = useState(true)

    if (error) {
        console.error('SubscribeAlert 에러', error)
    }

    const handleButtonClose = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <InspectionStatusAlarm inspectionStatusData={alarm} isOpen={isOpen} onClose={handleButtonClose} />
        </div>
    )
}

export default Alarm
