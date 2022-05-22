import { User } from "./types";

export interface GithubContainerProps {
    user: User
}

export function GithubContainer({ user }: GithubContainerProps) {
    return (
        <>
            <h1>{user.login}</h1>
            <h1>{user.bio}</h1>
            <h1>{user.company}</h1>
            <h1>{user.location}</h1>
            <img src={user.avatar_url} />
        </>
    )
}