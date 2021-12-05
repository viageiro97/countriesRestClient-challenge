import styled, { createGlobalStyle } from "styled-components";

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

export const ExportBtn = styled.button`
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  margin-right: 15px;
  border-radius: 5px;
  cursor: pointer;
  background: none;
  border: 2px solid dodgerblue;
  align-items: center;
  padding: 5px 10px;
  svg {
    margin-right: 5px;
  }

  &:hover {
    background: dodgerblue;
    color: white;
  }
  &:focus {
    outline: solid;
  }
`;

export default GlobalStyles;
