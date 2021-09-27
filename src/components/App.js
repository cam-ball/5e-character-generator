import React, { Component } from 'react';
import Interface from './Interface';
import './../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <div className='content'>
          <Interface />
        </div>
      </div>
    );
  }
}

export default App;
