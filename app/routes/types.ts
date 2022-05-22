export type CommentType = {
    username: string,
    comment: string
}

export type AlbumType = {
    id: number,
    title: string,
    username: string,
    image: string,
    comments: CommentType[]
}
