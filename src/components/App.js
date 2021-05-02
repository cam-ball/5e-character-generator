import React, { Component } from 'react';
import Character from './Character';
import './../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <div className='content'>
          <Character />
        </div>
      </div>
    );
  }
}

export default App;
