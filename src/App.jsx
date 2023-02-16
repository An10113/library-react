
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from "./component/Home";


function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
      <Route path="/" exact component={Home} />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
