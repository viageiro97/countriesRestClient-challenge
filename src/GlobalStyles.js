import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans', sans-serif;
        line-height: 1.4;
        background: #F2F6FA;
        color: #232C3D;
    }

    h1{
        font-size: 1.3rem;
    }

    h2{
        font-size: 1.2rem;
    }
    `;

export default GlobalStyles;