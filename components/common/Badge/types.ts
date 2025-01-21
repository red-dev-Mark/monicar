import { BADGE_SHAPE, OPERATION_STATUS, VEHICLE_ROLE } from './constants'

export type ShapeType = (typeof BADGE_SHAPE)[keyof typeof BADGE_SHAPE]
export type OperationStatusType = (typeof OPERATION_STATUS)[keyof typeof OPERATION_STATUS]
export type VehicleRoleType = (typeof VEHICLE_ROLE)[keyof typeof VEHICLE_ROLE]
