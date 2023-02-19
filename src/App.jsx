import Footer from "./component/Footer";
import Nav from "./component/Nav";
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data"
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BookInfo books={books} />} />
      <Route path="/cart" render={() => <Cart />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
