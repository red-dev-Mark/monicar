import { Route } from '@/types/route'

export const calculateAngle = (current: Route, next: Route) => {
    if (!next) return 0

    const lat1 = current.lat / 1000000
    const lng1 = current.lng / 1000000
    const lat2 = next.lat / 1000000
    const lng2 = next.lng / 1000000

    const dy = lat2 - lat1
    const dx = lng2 - lng1

    let angle = Math.atan2(dy, dx)
    angle = angle * (180 / Math.PI)
    angle = (angle + 360) % 360
    angle = (90 - angle + 360) % 360

    return angle
}
