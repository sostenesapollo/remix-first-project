import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 32px;
    justify-content: center;

    padding-top: 64px;
`

export const Album = styled.div`
    border: 1px solid #292929;
    background-color: #292929;

    border-radius: 8px;

    width: 600px;
    height: 300px;

    padding: 0;
    padding-bottom: 80px;
    text-align: start;
    color: #fff;

    &:hover {
        cursor: pointer;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 250px;

    object-fit: cover;
`
export const TextContainer = styled.p`
    padding: 16px;
`
export const Title = styled.div`
    margin-bottom: 8px;
`
export const Username = styled.h2`
    color: #ccc
`
