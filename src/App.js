import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Catalog from "./components/pages/Catalog";
import Cart from "./components/pages/Cart";
import Footer from './components/Footer/Footer';
import ItemDetails from "./components/pages/ItemDetails/ItemDetails"
import Checkout from "./components/pages/Checkout/Checkout";
import Success from "./components/pages/Success/Success";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/catalog' exact component={Catalog} />
          <Route path='/item/:id' exact component={ItemDetails} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/success' exact component={Success} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
