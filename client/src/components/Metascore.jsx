import React from 'react';
import PropTypes from 'prop-types';

import ChartWrapper from './ChartWrapper.jsx';

const Metascore = (props) => {
  // calculate the number of positive, negative, mixed reviews
  const scores = { positive: 0, mixed: 0, negative: 0 };
  props.scores.forEach((score) => {
    if (score > 60) {
      scores.positive += 1;
    } else if (score > 39) {
      scores.mixed += 1;
    } else {
      scores.negative += 1;
    }
  });

  // determine which review type has the most so we can normalize bar lengths
  let maxReview = "positive";

  for (let key in scores) {
      if (scores[key] > scores[maxReview]) {
        maxReview = key;
      }
  }

  // normalize the lengths of the ChartWrapper bars
  const normalizeLengths = {...scores};

  for (let key in normalizeLengths) {
    normalizeLengths[key] = normalizeLengths[key] / normalizeLengths[maxReview];
  }

  // calculate the average total score
  const avgScore = (props.scores.reduce((acc, el) => acc + el) / props.scores.length).toFixed(0);

  // assign the average total score to a descriptor
  let avgRating;
  avgScore > 60 ? avgRating = "positive" : avgScore > 39 ? avgRating = "mixed" : avgRating = "negative";

  return (
    <div className="metascore_charts">
      <div className="title_bump pad_btm1 oswald fh40">
        <div className="section_title bold">
          <a href="#">Metascore</a>
        </div>
      </div>
      <div className="distribution">
          <div className="score fl">
            <a href="#" className="metascore_anchor">
              <div className={`metascore_w larger movie ${avgRating}`}>{avgScore}</div>
            </a>
          </div>
            <div className="charts fl">
              <ChartWrapper type="positive" length={normalizeLengths.positive} reviews={scores.positive}/>
              <ChartWrapper type="mixed" length={normalizeLengths.mixed} reviews={scores.mixed}/>
              <ChartWrapper type="negative" length={normalizeLengths.negative} reviews={scores.negative}/>
            </div>
          <div className="clr"></div>
      </div>
    </div>
  );
};

export default Metascore;

Metascore.propTypes = {
  scores: PropTypes.array,
};
