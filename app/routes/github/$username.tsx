import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

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

export const loader: LoaderFunction = async ({ params }: any) => {
    const res = await fetch(`https://api.github.com/users/${params.username}`)

    return {
        user: await res.json()
    }
}

export default function () {
    const { user } = useLoaderData<LoaderData>()

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