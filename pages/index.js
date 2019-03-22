import React, { Component } from 'react';
// import Map from '../components/home/Map.js'
import '../util/tw.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Map/> */}
        {"test 3 : " + process.env.NODE_ENV}
      </div>
    );
  }
}

export default App;
