import { Route } from '@/types/route'

export const normalizeCoordinate = (coordinateValue: number): number => coordinateValue / 1000000
export const denormalizeCoordinate = (coordinateValue: number): number => Math.round(coordinateValue * 1000000)

export const normalizeRoutes = (routes: Route[]) =>
    routes.map((route: Route) => ({
        lat: normalizeCoordinate(route.lat),
        lng: normalizeCoordinate(route.lng),
    }))
