import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PriceStats from './components/PriceStats';
import TickerTable from './components/TickerTable';

const App = () => {
  const [tickers, setTickers] = useState([]);
  const [stats, setStats] = useState([
    { value: '0.1 %', label: '5 Mins' },
    { value: '0.96 %', label: '1 Hour' },
    { value: '₹ 26,56,110', label: 'Best Price to Trade' },
    { value: '2.73 %', label: '1 Day' },
    { value: '7.51 %', label: '7 Days' },
  ]);

  useEffect(() => {
    const fetchTickers = async () => {
      const response = await fetch('http://localhost:5000/api/tickers');
      const data = await response.json();
      setTickers(data);
    };

    fetchTickers();
    const interval = setInterval(fetchTickers, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Header />
      <PriceStats stats={stats} />
      <TickerTable tickers={tickers} />
      <div className="add-to-home">Add hodlinfo to home screen</div>
    </div>
  );
};

export default App;