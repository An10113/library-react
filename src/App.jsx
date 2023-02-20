import Footer from "./component/Footer";
import Nav from "./component/Nav";
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data"
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart,setCart] = useState([])

    function addtoCart(book){
      const dupeItem = cart.find(item => +item.id === book.id )
      if(dupeItem){
        setCart(cart.map((item )=>{
          if(item.id === book.id){
            return {...item,quantity: item.quantity +1}
          } 
          else{
            return item
          }
        }))
      }
      else{
      setCart([...cart, {...book , quantity: 1}])
      }}  
  

  useEffect(() => {
    console.log(cart)
  },[cart])

  return (
    <Router>
    <div className="App">
        <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BookInfo books={books} addtoCart={addtoCart}/>} />
      <Route path="/cart" render={() => <Cart />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
