import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <Student name="Sathish" dept="ECE" cgpa="8.5"/>
      <hr></hr>
      <Student name="Kumar" dept="ECE" cgpa="6.7"/>
      </div>
  );
}

export default App;
