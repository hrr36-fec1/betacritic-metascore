import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import ChartWrapper from './ChartWrapper';
import styles from '../style.module.css';

const Metascore = ({ scores, type }) => {
  // calculate the number of positive, negative, mixed reviews
  const scoresCategory = { positive: 0, mixed: 0, negative: 0 };
  scores.forEach((score) => {
    if (score > 60) {
      scoresCategory.positive += 1;
    } else if (score > 39) {
      scoresCategory.mixed += 1;
    } else {
      scoresCategory.negative += 1;
    }
  });

  // determine which review type has the most so we can normalize bar lengths
  const maxReviews = _.max(scoresCategory);

  // normalize the lengths of the ChartWrapper bars
  const normalizeLengths = { ...scoresCategory };
  const keys = Object.keys(normalizeLengths);
  for (let i = 0; i < keys.length; i += 1) {
    normalizeLengths[keys[i]] /= maxReviews;
  }

  // calculate the average total score
  const avgScore = (scores.reduce((acc, el) => acc + el) / scores.length).toFixed(0);

  // assign the average total score to a descriptor
  let avgRating;
  if (avgScore > 60) {
    avgRating = 'positive';
  } else if (avgScore > 39) {
    avgRating = 'mixed';
  } else {
    avgRating = 'negative';
  }

  return (
    <div className={`${styles.metascore_charts}`}>
      <div className={`${styles.title} ${styles.title_bump} ${styles.pad_btm1} ${styles.oswald}`}>
        <div className={`${styles.section_title}`}>
          <a href="/">{type === 'critic' ? 'Metascore' : 'User Score'}</a>
        </div>
      </div>
      <div className={`${styles.distribution}`}>
        <div className={`${styles.score} ${styles.fl}`}>
          <a href="/" className="">
            <div className={`${styles.metascore_w} ${(type === 'user') ? styles.user_review : ''} ${styles.title} ${styles.larger} ${styles.movie} ${styles[avgRating]}`}>{avgScore}</div>
          </a>
        </div>
        <div className={`${styles.charts} ${styles.fl}`}>
          <ChartWrapper type="positive" length={normalizeLengths.positive} reviews={scoresCategory.positive} />
          <ChartWrapper type="mixed" length={normalizeLengths.mixed} reviews={scoresCategory.mixed} />
          <ChartWrapper type="negative" length={normalizeLengths.negative} reviews={scoresCategory.negative} />
        </div>
      </div>
    </div>
  );
};

export default Metascore;

Metascore.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
};
