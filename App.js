import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min.js";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
