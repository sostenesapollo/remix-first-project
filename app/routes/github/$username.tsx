export const loader = async ({params}) => {
    return {
        user: params.username
    }
}