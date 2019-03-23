import React, { Component } from 'react';
import Map from '../components/home/Map.js'
import '../util/tw.css';

const key = process.env.GOOGLEMAP_API_KEY

class App extends Component {
  static getInitialProps() {
    return {
        "env": key,
    }
}

  render() {
    return (
      <div>
        <Map apiKey={this.props.env} />
      </div>
    );
  }
}

export default App;
