import Footer from "./component/Footer";
import Nav from "./component/Nav";
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data"
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";
import { c } from "tar";

function App() {
  const [cart,setCart] = useState([])

    function addtoCart(book){
     setCart([...cart,{...book,quantity:1}])
    }  
    function changeQuantity(book, quantity){
        setCart(cart.map(item => 
          item.id === book.id ?
            {
              ...item,
              quantity: +quantity
            }
          : item
        ))
          }
  return (
    <Router>
    <div className="App">
        <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BookInfo books={books} addtoCart={addtoCart} cart={cart}/>} />
      <Route path="/cart" render={() => 
      <Cart cart={cart} changeQuantity={changeQuantity} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
