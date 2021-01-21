import {BooksImg }from "../Styles";
const Books  = (props)=>{
    
    return (
        <div>
         <BooksImg>
         <img src={props.book.img} alrt="book-phooto" />
         </BooksImg>
         <p>{props.book.name}</p>
         <p>{props.book.price}</p>
       </div>
  
      );
};
export default Books;