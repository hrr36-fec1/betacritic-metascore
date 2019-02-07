import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/ReviewList.jsx';
import Metascore from './components/Metascore.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <Metascore />
        <ReviewList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("metascore"));
