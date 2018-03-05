import React, { Component } from 'react';
import opening_hours from 'opening_hours';

import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    const currentState = data.cuDining.map(item => {
      const oh = new opening_hours(item.openingHours);
      return oh.getState();
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Open CU</h1>
        </header>
        <div className="App-intro">
          <ul>
            {data.cuDining.map((item, index) => (
              <li key={index}>{item.title} &middot; {currentState[index] ? 'OPEN' : 'CLOSED'}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
