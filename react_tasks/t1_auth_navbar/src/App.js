import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
function App() {
  const {isLoggedIn , user , login , logout} = useContext(AuthContext)
  return (
    <div className="App">
        <NavBar isLoggedIn={isLoggedIn} user={user} login={login} logout={logout} />

    </div>
  );
}

export default App;
