import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-gray: #A8A8A8;
        --gray-dark: #787878;
    }
    
    *{
		@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;500&family=Roboto:wght@300;400;500;700&display=swap');
        border: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
`;

export const Main = styled.main`
    @import url('https://fonts.googleapis.com/css?family=Francois+One|Roboto');

    .title{
        margin: 2%;
    }

    .title h1, p{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cards {
        display: flex;
        justify-content: center;
    }
    .cards .card {
        background: var(--color-gray);
        border-radius: 10px;
        margin: 0.4em 1.2em 0.2em 1.2em;
    }
    .cards .card .miniatura {
        background: var(--gray-dark);

        display: flex;
        justify-content: center;

        border-radius: 10px 10px 0 0;
        padding: 100px;
    }
    .cards .card .card-content p {
        padding: 0.5em 0.8em 0.5em 0.8em;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
    .articulos {
        display: flex;
        justify-content: center;    
    }
    .articulos .articulo {
    background: #AB9F77;
    border-radius: 10px;
    margin: 0.4em 0.2em 0.2em 0.2em;
    padding: 0 0.2em 0 0.2em;
    }
    .articulos .articulo p {
    padding: 0.5em 0.8em 0.5em 0.8em;
    color: white;
    font-family: 'Roboto', sans-serif;
    }
    .articulos .articulo h2 {
    text-align: center;
    color: white;
    font-family: 'Francois One', sans-serif;
    letter-spacing: 0.1em;
    }
    .articulos .articulo hr {
    margin-bottom: 1em;
    height: 2px;
    border: none;
    background: #696969;
    }
    @media (min-width: 0px) {
    .cards, .articulos {
        flex-flow: row wrap;
    }
    .card {
        width: 100%;
    }
    }
    @media (min-width: 480px) {
    .cards, .articulos {
        flex-flow: row wrap;
    }
    .card {
        width: 45%;
    }
    .articulo {
        width: 90%;
    }
    }
    @media (min-width: 930px) {
    .articulo {
        width: 35%;
        height: 2%;
    }
    }
    @media (max-width: 770px) {
        .cards .card{
            margin: 0.4em .5em 0.2em .5em;
        }
    }

    margin-bottom: 5%;
`;