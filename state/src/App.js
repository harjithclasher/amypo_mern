import { useState } from 'react';
import './App.css';
import News from './components/News';

// import Counter from './components/Counter';
// import Login from './components/Login';
// import Timer from './components/Timer';
// import ToggleTheme from './components/ToggleTheme';

function App() {
  const [category , setCategory ] = useState ("");
  return (
    <div className="App"  style={{textAlign:"Center"} }>
    {/* <Counter/>
    <Login/> */}
    {/* <Timer/> */}
    <h3>News application</h3>
    <button onClick={()=>setCategory("general")}>General</button>
    <button onClick={()=>setCategory("Technology")}>Technology</button>
    <button onClick={()=>setCategory("sports")}>Sports</button>
    <News category={category}/>
    </div>
  );
}

export default App;
