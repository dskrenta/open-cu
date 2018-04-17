import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import getIcon from '../utils/getIcon';

const Weather = ({ weather }) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.location}>Boulder, CO</Text>
      <View style={styles.row}>
        <Icon name={getIcon(weather.item.condition.code)} size={65} />
        <Text style={styles.temp}>{weather.item.condition.temp}&deg;</Text>
      </View>
      <Text style={styles.location}>{weather.item.condition.text}</Text>
    </View>
    <View style={styles.forecast}>
      {weather.item.forecast.map((day, index) => (
        <View key={index} style={styles.forecastRow}>
          <Text style={[styles.forecastText, index === 0 && {fontWeight: 'bold'}]}>{index === 0 ? 'Today' : day.day}</Text>
          <View style={styles.forecastItem}>
            <Icon name={getIcon(day.code)} size={30} />
          </View>
          <Text style={[styles.forecastText, index === 0 && {fontWeight: 'bold'}]}>{day.high}</Text>
          <Text style={[styles.forecastText, index === 0 && {fontWeight: 'bold'}]}>{day.low}</Text>
        </View>
      ))}
    </View>
    <View style={styles.extraContain}>
      {'astronomy' in weather &&
        <View style={styles.extra}>
          <View style={styles.extraItem}>
            <Icon name='weather-sunset-up' size={30} />
            <Text style={styles.extraText}>{weather.astronomy.sunrise}</Text>
          </View>
          <View style={styles.extraItem}>
            <Icon name='weather-sunset-down' size={30} />
            <Text style={styles.extraText}>{weather.astronomy.sunset}</Text>
          </View>
        </View>
      }
    </View>
  </View>
)

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  location: {
    fontSize: 18
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  forecastRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    paddingLeft: 30,
    paddingVertical: 5
  },
  temp: {
    fontSize: 65,
    fontWeight: 'bold',
    margin: 10,
    marginRight: 0
  },
  forecast: {
    display: 'flex',
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  forecastItem: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  forecastText: {
    flex: 1,
    fontSize: 18
  },
  extraContain: {
    paddingHorizontal: 30,
    paddingBottom: 80,
    paddingTop: 20,
  },
  extra: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },  
  extraItem: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  extraText: {
    marginLeft: 10,
    fontSize: 20
  }
})

export default Weather;