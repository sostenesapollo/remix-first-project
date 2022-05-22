import { useLocation } from "@remix-run/react";
import { Location } from "history";
import { Container, Image, TextContainer, Title, Username } from "../styles";
import { AlbumType } from "../types";
import { Comment, CommentsContainer, Text, Album, Divider } from "./styles";

interface State extends Location {
    state: {
        album: AlbumType
    }
}

export default function Details() {

    const { state } = useLocation() as State

    if (!state) return <>Selecione algum album na página anterior</>

    return (
        <Container>
            <Album key={state.album.id}>
                <Image src={state.album.image} alt="Thumbnail" />
                <TextContainer>
                    <Title>{state.album.title}</Title>
                    <Username>{state.album.username} </Username>
                    <p>{state.album.title}</p>
                    <Divider />
                    <CommentsContainer>
                        <Text>Comentários</Text>
                        {state.album.comments.map((comment) => (
                            <div>
                                <Comment> Um Comentário</Comment>
                                <Username>Luís</Username>
                            </div>
                        ))}
                    </CommentsContainer>
                </TextContainer>

            </Album>
        </Container>
    )
}