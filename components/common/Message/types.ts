import { MESSAGES } from './constants'

export type MessageType = {
    category: keyof typeof MESSAGES
    type: keyof (typeof MESSAGES)[keyof typeof MESSAGES]
}
