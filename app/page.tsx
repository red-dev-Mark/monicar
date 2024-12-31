import Link from 'next/link'

import Badge from '@/components/common/Badge'
import { BADGE_SHAPE, OPERATION_STATUS, VEHICLE_ROLE } from '@/components/common/Badge/constants'

const HomePage = () => {
    return (
        <div>
            <h1>HI</h1>
            <Link href={'/test'}>Go To Test</Link>
            <Badge shape={BADGE_SHAPE.CIRCLE} variant={OPERATION_STATUS.OPERATING} />
            <Badge shape={BADGE_SHAPE.CIRCLE} variant={VEHICLE_ROLE.GENERAL} />
            <Badge shape={BADGE_SHAPE.CIRCLE} variant={VEHICLE_ROLE.COMMUTE} />
            <Badge shape={BADGE_SHAPE.RECTANGLE} variant={OPERATION_STATUS.OPERATING} />
            <Badge shape={BADGE_SHAPE.RECTANGLE} variant={OPERATION_STATUS.NOT_CONTROLLED} />
            <Badge shape={BADGE_SHAPE.RECTANGLE} variant={OPERATION_STATUS.NOT_OPERATING} />
        </div>
    )
}

export default HomePage
