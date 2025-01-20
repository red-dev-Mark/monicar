import { logPaths, noticePaths } from './constants'

export type LogType = (typeof logPaths)[number]['label']
export type NoticeType = (typeof noticePaths)[number]['label']

export type BreadcrumbType = LogType | NoticeType
export { logPaths, noticePaths }
