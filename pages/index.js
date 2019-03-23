import React, { Component } from 'react';
import Map from '../components/home/Map.js'
import '../util/tw.css';

const env = process.env.GOOGLEMAP_API_KEY

class App extends Component {
  getInitialProps() {
    return {"key" : env}
  }

  render() {
    return (
      <div>
        {/* <Map/> */}
        {"test 3 : " + process.env.NODE_ENV}
        {"?? 3 : " + process.env.GOOGLEMAP_API_KEY + "dsEs3d3HS3xP" + this.props.key}
      </div>
    );
  }
}

export default App;
