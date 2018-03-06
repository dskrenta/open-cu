import React, { Component } from 'react';
import opening_hours from 'opening_hours';
import { AppBar } from 'material-ui';

import Feed from './components/Feed';

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
        <AppBar 
          title="Open CU"
          showMenuIconButton={false}
          style={{position: 'fixed', top: 0}}
          titleStyle={{fontWeight: 'bold'}}
        />
        <Feed data={data} currentState={currentState} />
      </div>
    );
  }
}

export default App;
