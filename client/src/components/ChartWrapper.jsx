import React from 'react';

const ChartWrapper = (props) => {
  return (
    <div className="chart_wrapper">
      <div className="chart_bg"></div>
      <div className={`chart ${props.type}`}>
        <div className={`bar ${props.type}`}></div>
        <div className="text oswald">
          <div className="label fl">{props.type}:</div>
          <div className="count fr"></div>
          <div className="clr"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartWrapper;
