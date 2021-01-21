import data from "../data";
import Books from "./Books";
const BookList  = ()=>{
    const booklist = data.map((dt) => 
        <Books key = {dt.id} book={dt}/>);
        return (
            <div>
                <p>{booklist}</p> 
               
               
            </div>
        );
      
};

export default BookList;