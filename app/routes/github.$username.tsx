
import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { GithubContainer, GithubApi, LoaderData } from '~/features/github'

export const loader: LoaderFunction = async ({ params }: any) => {
    return {
        user: await GithubApi.getGithubUser(params.username)
    }
}

export default function () {
    const { user } = useLoaderData<LoaderData>()
    return <GithubContainer user={user} />
}

export function ErrorBoundary(e: any) {
    return <p>Whoops!</p>
}