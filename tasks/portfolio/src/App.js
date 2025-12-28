
import './App.css';
import {BrowserRouter , Routes , Route , Link} from "react-router-dom"
import Home from './components/Home';
import Products from './components/Products';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/products">Products</Link>
        <Link to="/service">Service</Link>
        <Link to="/clients">Clients</Link>
      </nav>

      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path = "/products" element={<Products/>}/>
        <Route path = "/service" element={<Service/>}/>
        <Route path = "/portfolio" element = {<Portfolio/>}/>
        <Route path="/clients" element={<Clients/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
