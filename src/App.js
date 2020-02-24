import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data';

function App() {
  const [ratesArr, setRatesArr] = useState([]);

  useEffect(() => {
    const promise = Promise.resolve(data);
    promise.then((value) => {
      setRatesArr(Object.entries(value.rates));
    });
  }, []);

  return (
    <div className="rates">
      <h1>Rates</h1>
      <ul className="rates-list">
        {ratesArr.map(item => <li className="rates-item">{item[0]} - {item[1]}</li>)}
      </ul>
    </div>
  );
}

export default App;
