
import './App.css';
import data from "./data";

function App() {

  const booklist = data.map((dt) => {
    return (
      <div>
      <img src={dt.img} alrt="bookpk" />
       <p>{dt.name}</p>
       <p >{dt.price}</p>
     </div>

    );
  });

  return (
    <div className="Ahmad">
      <header className="App-header">
         <p>My Book Store</p>
         <p>Think before you speak😉... </p>
         <p > Read before you think😉...</p>
         <img src="book.png" alt="jfuy" />
         <div>{booklist}</div>
        <div >
      
      
    </div>

      </header>
    </div>
  );
}

export default App;
