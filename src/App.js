
import './App.css';

import Introduction from "./components/Introduction";
import BookList from "./components/BookList";
import {GlobalStyle,BooksImg }from "./Styles";
import { ThemeProvider } from "styled-components";

const theme = {
  //mainColor: "#242424", // main font color
  backgroundColor: "#282c34", // main background color
  //pink: "#ff85a2",
};
function App() {

  

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <header >
        
        <div >
         <Introduction/>
         
         <BookList/>
         </div>
         

      </header>
      </ThemeProvider> 
    
  );
}

export default App;
