
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/features/github/types'

import { LoaderFunction } from '@remix-run/node'
import { getGithubUser } from '~/features/github/api'
export const loader: LoaderFunction = async ({ params }: any) => {
    return {
        user: await getGithubUser(params.username)
    }
}

export default function () {
    const { user } = useLoaderData<LoaderData>()
    console.log(user);


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