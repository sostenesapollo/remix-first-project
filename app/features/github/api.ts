import invariant from "tiny-invariant"

export const getGithubUser = async (username: string) => {
    invariant(username, "Please provide a username as a string")

    const res = await fetch(`https://api.github.com/users/${username}`)

    const { login, avatar_url, company, location, bio } = await res.json()

    return {
        login, avatar_url, company, location, bio
    }
}