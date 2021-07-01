export interface TableRowProps {
    username: string
    date: string
    score: number
}

export interface UsernameProps {
    username: string
    setUsername: (username: string) => void
}

export interface Username {
    username: string
}

export interface PreData {
    username: string
    score: number
}

export interface TextProps {
    text: string | number
    lastSeconds?: boolean
}