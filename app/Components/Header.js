import React from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableHighlight } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import getIcon from '../utils/getIcon';
import Weather from './Weather';

class Header extends React.Component {
  state = {
    weather: undefined
  }

  componentDidMount() {
    const unit = 'F';
    const location = 'Boulder, CO'
    const queryUri = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u='${unit}' AND woeid in (select woeid from geo.places(1) where text="${location}")&format=json`;
    fetch(queryUri)
      .then((res) => {
        if (res.status >= 400) throw new Error('Bad response from server');
        return(res.json());
      })
      .then(
        (json) => json.query.results === null ? null : this.setState({weather: json.query.results.channel})
      )
  }

  openWeather = () => {
    this.props.modalHandler(true, (<Weather weather={this.state.weather} />));
  }

  render() {
    const { modalHandler } = this.props;
    return (
      <View style={styles.contain}>
        <Text style={styles.title}>Open CU</Text>
        {this.state.weather &&
          <TouchableHighlight onPress={this.openWeather} underlayColor='transparent'>
            <View style={styles.weatherContain}>
              <Icon style={styles.weatherIcon} name={getIcon(this.state.weather.item.condition.code)} size={30} />
              <Text style={styles.weatherText}>{this.state.weather.item.condition.temp}&deg;</Text>
            </View>
          </TouchableHighlight>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#0ae',
    ...Platform.select({
      ios: {
        ...ifIphoneX({
          paddingTop: 130,
          height: 180
        }, {
          paddingTop: 20,
          height: 70
        })
      },
      android: {
        paddingTop: 0,
        height: 50
      }
    })
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  weatherContain: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  weatherText: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 5
  },
  weatherIcon: {
    height: 30,
    width: 30,
    color: 'white'
  }
})

export default Header;