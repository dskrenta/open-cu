import React from 'react';
import { AppBar, Dialog } from 'material-ui';
import weather from 'yahoo-weather';
import WeatherIcon from 'react-icons-weather';

import Feed from './Feed';
import WeatherModal from './WeatherModal';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: undefined,
      open: false,
    };
  }

  componentDidMount() {
    weather('boulder', 'f')
      .then(res => this.setState({weather: res}))
      .catch(error => console.error(error));
  }

  handleOpen = (item, open) => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  renderWeatherIcon = () => {
    if (!this.state.weather) return null;
    const current = this.state.weather.item.condition;
    return (
      <div className="appbarWeatherContain" onClick={this.handleOpen}>
        <WeatherIcon name="yahoo" iconId={current.code} className="appbarWeatherIcon" />
        {current.temp}&deg;
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <AppBar 
          title="Open CU"
          showMenuIconButton={false}
          style={{position: 'fixed', top: 0}}
          titleStyle={{fontWeight: 'bold', textAlign: 'left'}}
          iconElementRight={this.renderWeatherIcon()}
        />
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={{width: '95%', maxWidth: 700}}
        >
          {this.state.weather && <WeatherModal weather={this.state.weather} />}
        </Dialog>
        <Feed />
      </div>
    );
  }
}

export default App;
