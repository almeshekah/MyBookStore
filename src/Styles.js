import styled from "styled-components";
import  { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    
  }
`;
const BooksImg = styled.p`
  align-items: center;
  justify-content: center;
  display: flex;
`;


export {GlobalStyle,BooksImg }

