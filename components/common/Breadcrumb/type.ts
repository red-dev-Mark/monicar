export const logPaths = [
    { label: '운행기록', path: '/log' },
    { label: '운행일지', path: '/log' },
    { label: '일별 및 시간별 운행기록', path: '/log' },
] as const

export const noticePaths = [
    { label: '대시보드', path: '/' },
    { label: '공지사항', path: '/notice' },
] as const

export type LogType = (typeof logPaths)[number]['label']
export type NoticeType = (typeof noticePaths)[number]['label']

export type BreadcrumbType = LogType | NoticeType
