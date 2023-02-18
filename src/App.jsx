import Footer from "./component/Footer";
import Nav from "./component/Nav";
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from "./component/Home";
import Books from "./component/Books";
import { books } from "./data"
import BookInfo from "./component/BookInfo";

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/1" render={() => <BookInfo books={books} />} />
      <Footer />

    </div>
    </Router>
  );
}

export default App;
