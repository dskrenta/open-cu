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
    <View style={styles.body}>
      {weather.item.forecast.map((day, index) => (
        <View key={index} style={styles.forecastRow}>
          <Text>{day.day}</Text>
          <Text>{}</Text>
          <Text>{day.high}</Text>
          <Text>{day.low}</Text>
        </View>
      ))}
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
    flex: 1
  },
  temp: {
    fontSize: 65,
    fontWeight: 'bold',
    margin: 10,
    marginRight: 0
  },
  body: {
    display: 'flex',
  }
})

export default Weather;