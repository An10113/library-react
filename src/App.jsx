import Discounted from "./component/Discounted";
import Featured from "./component/Featured";
import Highlights from "./component/Highlights";
import Landing from "./component/Landing";
import Nav from "./component/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
