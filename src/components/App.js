import React from 'react';
import { AppBar } from 'material-ui';
import weather from 'yahoo-weather';

import Feed from './Feed';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: undefined
    };
  }

  componentDidMount() {
    weather('boulder', 'f')
      .then(res => this.setState({weather: res}))
      .catch(error => console.error(error));
  }

  render() {
    return (
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
  }
}

export default App;
