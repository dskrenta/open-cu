import React, { Component } from 'react';
import { AppBar } from 'material-ui';

import Feed from './Feed';

import './App.css';

const App = () => (
  <div className="App">
    <AppBar 
      title="Open CU"
      showMenuIconButton={false}
      style={{position: 'fixed', top: 0}}
      titleStyle={{fontWeight: 'bold'}}
    />
    <Feed />
  </div>
);

export default App;
