import React from 'react';
import ChartWrapper from './ChartWrapper.jsx';

const Metascore = (props) => {
  /* UPDATE THIS BASED ON PROPS */
  const avgReview = 'mixed';

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
              <div className={`metascore_w larger movie ${avgReview}`}>{props.scores.reduce((acc, el) => acc + el) / props.scores.length}</div>
            </a>
          </div>
            <div className="charts fl">
              <ChartWrapper type="positive"/>
              <ChartWrapper type="mixed"/>
              <ChartWrapper type="negative"/>
            </div>
          <div className="clr"></div>
      </div>
    </div>
  );
};

export default Metascore;
