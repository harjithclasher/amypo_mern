import { useState } from 'react';
import './App.css';
import CartSummary from './components/CartSummary';
//import Products from './components/Products';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';

function App() {
  //const [ count , setCount] = useState(0)
  const [ cart , setCart] = useState([])
  return (
    <div className="App">
      {/* <Products  count = {count} setCount={setCount}/>
      <CartSummary count={count}/>
       */}
       <NavBar cartCount = {cart.length}/>
       <ProductList cart = {cart} setCart={setCart}/>
       <CartSummary cart = {cart}/>
    </div>
  );
}

export default App;
