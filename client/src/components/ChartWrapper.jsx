import React from 'react';
import PropTypes from 'prop-types';

const ChartWrapper = (props) => {
  const barLength = {
    width: `${100 * props.length}%`,
  };

  return (
    <div className="chart_wrapper">
      <div className="chart_bg"></div>
      <div className={`chart ${props.type}`} style={barLength}>
        <div className={`bar ${props.type}`}></div>
        <div className="text oswald">
          <div className="label fl">{props.type}:</div>
          <div className="count fr">{props.reviews}</div>
          <div className="clr"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartWrapper;

ChartWrapper.propTypes = {
  length: PropTypes.number,
  reviews: PropTypes.number,
  type: PropTypes.string,
};
