import styled from 'styled-components';

export const ContactContainer = styled.div`
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
`

export const ContactWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
`

export const ContactCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    transition: all 0.2s ease-in-out;
`

export const ContactH1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 40px;
    font-family: 'Dancing Script', cursive;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ContactIcon = styled.a`
    color: #fff;
    font-size: 30px;
    padding: 10px;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 30px;
        padding: 20px;
    }

    &:hover {
        opacity: 80%;
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
`