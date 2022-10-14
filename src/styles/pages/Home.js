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