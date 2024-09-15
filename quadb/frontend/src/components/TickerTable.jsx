import React from 'react';
import * as Gi from 'react-icons/gi';

const TickerTable = ({ tickers }) => {
  const iconNames = Object.keys(Gi);

  // Function to get a random icon
  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * iconNames.length);
    const IconComponent = Gi[iconNames[randomIndex]];
    return <IconComponent />;
  };

  
  const calculateDifference = (buy, sell) => {
    const avg = (parseFloat(buy) + parseFloat(sell)) / 2;
    const lastPrice = parseFloat(sell); 
    return ((lastPrice - avg) / avg) * 100;
  };

  // Function to calculate savings
  const calculateSavings = (buy, sell) => {
    return parseFloat(buy) - parseFloat(sell);
  };

  return (
    <table className="ticker-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Platform</th>
          <th>Last Traded Price</th>
          <th>Buy / Sell Price</th>
          <th>Difference</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>
        {tickers.map((ticker, index) => {
          const difference = calculateDifference(ticker.buy, ticker.sell);
          const savings = calculateSavings(ticker.buy, ticker.sell);
          
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="platform">
                <span className="platform-icon">{getRandomIcon()}</span>
                {ticker.name}
              </td>
              <td>₹ {ticker.last}</td>
              <td>₹ {ticker.buy} / ₹ {ticker.sell}</td>
              <td className={difference >= 0 ? 'positive' : 'negative'}>
                {difference.toFixed(2)}%
              </td>
              <td className={savings >= 0 ? 'positive' : 'negative'}>
                {savings >= 0 ? '▲' : '▼'} ₹ {Math.abs(savings).toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TickerTable;