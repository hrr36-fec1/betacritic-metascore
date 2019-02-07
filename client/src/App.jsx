import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import ReviewList from './components/ReviewList.jsx';
import Metascore from './components/Metascore.jsx';

import reviews from '../../examples/reviews.js';
import scores from '../../examples/scores.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: reviews,
      scores: scores,
    };
  }

  render() {
    return (
      <div className="fxdcol gu4 reviews">
        <Metascore scores={this.state.scores}/>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("metascore"));
