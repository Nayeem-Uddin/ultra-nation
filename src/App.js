import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country.js';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {
          setCountries(data.slice(0,20));
          //console.log(data);
          //data.map(country => console.log(country.name));
        })
        .catch(error => console.log(error))
  },[])
  return (
    <div className="App">
    {
      console.log(countries)
    }
    {
      <h3>Country loaded: {countries.length}</h3>
    }
    {
      countries.map(country => <Country country={country}  key={country.alpha3code}></Country>)
    }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
