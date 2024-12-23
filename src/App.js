import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min.js";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
      setCart(cart.map(item => item.id === book.id
        ? {
          ...item,
          quantity: +quantity
        }
        : item
      ))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.filter(item => {
      counter += item.quantity
    })
    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" exact render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" exact render={() => <Cart books={books} changeQuantity={changeQuantity} removeItem={removeItem} cart={cart} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
