import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">HODLINFO</div>
      <div className="controls">
        <select className="currency-select">
          <option>INR</option>
          <option>BTC</option>
        </select>
        <button className="buy-btn">BUY BTC</button>
        <div className="timer">57</div>
        <button className="telegram-btn">
          <span className="telegram-icon">✈</span> Connect Telegram
        </button>
        <div className="theme-toggle"></div>
      </div>
    </header>
  );
};

export default Header;