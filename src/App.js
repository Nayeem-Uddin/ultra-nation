import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            <h3>Total Country: {countries.length}</h3>
          }
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
