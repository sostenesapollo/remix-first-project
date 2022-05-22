import styled from "styled-components"

export const CommentsContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const Divider = styled.div`
    padding-top: 10px;
    border-bottom: 1px solid #515151;
`

export const Album = styled.div`
    border: 1px solid #292929;
    background-color: #292929;

    border-radius: 8px;

    width: 600px;
    height: 300px;

    padding: 0;
    padding-bottom: 170px;
    text-align: start;
    color: #fff;

    &:hover {
        cursor: pointer;
    }
`

export const Text = styled.h3`
`

export const Username = styled.p`
`

export const Comment = styled.p`
    font-size: 18px;
    font-weight: 500;
`