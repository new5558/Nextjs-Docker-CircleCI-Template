import React, { Component } from 'react';
// import Map from '../components/home/Map.js'
import '../util/tw.css';

class App extends Component {
  render() {
    for(const field in process.env) {
      console.log(field + " : " + process.env[field]);
    } 
    console.log('special :'+ process.env.GOOGLEMAP_API_KEY )
    const key = process.env.GOOGLEMAP_API_KEY;
    console.log('key :' + key)
    return (
      <div>
        {/* <Map/> */}
        {"test 3 : " + process.env.NODE_ENV}
        {"?? 3 : " + process.env.GOOGLEMAP_API_KEY + "dsEs3d3HS3xP" + key}
      </div>
    );
  }
}

export default App;
