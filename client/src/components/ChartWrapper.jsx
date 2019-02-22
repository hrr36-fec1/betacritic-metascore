import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.module.css';

const ChartWrapper = ({ length, type, reviews }) => {
  const barLength = {
    width: `${100 * length}%`,
  };

  return (
    <div className={`${styles.chart_wrapper}`}>
      <div className={`${styles.chart_bg}`} />
      <div className={`${styles.chart} ${styles[type]}`} style={barLength}>
        <div className={`${styles.bar} ${styles[type]}`} />
        <div className={`${styles.text} ${styles.oswald}`}>
          <div className={`${styles.fl}`}>
            {`${type}:`}
          </div>
          <div className={`${styles.fr}`}>{reviews}</div>
        </div>
      </div>
    </div>
  );
};

export default ChartWrapper;

ChartWrapper.propTypes = {
  length: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
