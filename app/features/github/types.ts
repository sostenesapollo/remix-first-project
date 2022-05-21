export interface User {
    login: string
    avatar_url: string
    html_url: string
    bio: string
    company: string
    location: string
}

export interface LoaderData {
    user: User
}