
const Books  = (props)=>{
    
    return (
        <div>
         
         <img src={props.book.img} alrt="bookpk" />
         <p>{props.book.name}</p>
         <p>{props.book.price}</p>
       </div>
  
      );
};
export default Books;