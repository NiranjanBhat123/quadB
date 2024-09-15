import React from 'react';

const PriceStats = ({ stats }) => {
  return (
    <div className="price-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PriceStats;