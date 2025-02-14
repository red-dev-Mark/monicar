import { BaseButton } from '@/components/common/Button/BaseButton'
import { WhiteAddIcon, WhiteAlertIcon, WhiteBellIcon, WhiteCheckIcon } from '@/public/icons'

import InspectionCard from '../InspectionCard'

type StatusType = 'REQUIRED' | 'SCHEDULED' | 'INPROGRESS' | 'COMPLETED'

interface InspectionItemProps {
    vehicleNumber: string
    drivingDistance?: number
    name?: string
    status: StatusType
}

const InspectionItem = ({ vehicleNumber, drivingDistance, name, status }: InspectionItemProps) => {
    const inspectionIconStatus = (status: StatusType) => {
        switch (status) {
            case 'REQUIRED':
                return <WhiteBellIcon />
            case 'SCHEDULED':
                return <WhiteAlertIcon />
            case 'INPROGRESS':
                return <WhiteAddIcon />
            case 'COMPLETED':
                return <WhiteCheckIcon />
        }
    }

    return (
        <InspectionCard
            icon={inspectionIconStatus(status)}
            title={vehicleNumber}
            description={drivingDistance || name || ''}
            actionButton={<BaseButton onClick={() => {}}>승인</BaseButton>}
            status={'REQUIRED'}
        />
    )
}

export default InspectionItem
