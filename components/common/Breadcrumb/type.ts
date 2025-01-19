// TODO: path 추가

export const breadcrumbPaths = [
    { label: '운행기록', path: '/log' },
    { label: '운행일지', path: '/log' },
    { label: '일별 및 시간별 운행기록', path: '/log' },
] as const

export type BreadcrumbType = (typeof breadcrumbPaths)[number]['label']
