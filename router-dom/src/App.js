import './App.css';

import {BrowserRouter , Routes , Route , Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Placements from './pages/Placements';
import Academics from './pages/Academics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/place">Placements</Link>
        <Link to="/admission">Admission</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admission" element={<Admission/>} />
        <Route path="place" element={<Placements/>} />
        <Route path="/academics" element ={<Academics/>}/>
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
