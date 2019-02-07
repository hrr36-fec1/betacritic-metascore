import React from 'react';
import ChartWrapper from './ChartWrapper.jsx';

const Metascore = (props) => {

  return (
    <div className="title_bump pad_btm1 oswald fh40">
      <div className="section_title bold">
        <a href="#">Metascore</a>
      </div>
      <div className="distribution">
        <div className="score fl"></div>
          <a href="#" className="metascore_anchor">
            <div className="metascore_w larger movie mixed">{props.scores.reduce((acc, el) => acc + el) / props.scores.length}</div>
          </a>
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
