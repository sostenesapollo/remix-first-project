import { LoaderFunction } from "@remix-run/node";
import { GithubApi } from "~/features/github";

export const loader: LoaderFunction = async ({ params }: any) => {
    return {
        username: params.username,
        user: await GithubApi.getGithubUser(params.username),
    }
}

export function ErrorBoundary(e: any) {
    return <p>Whoops from repos.tsx !</p>
}

export default function (data: any) {
    return <h3>Issues {JSON.stringify(data)}</h3>;
}
