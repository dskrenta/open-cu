import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import getIcon from '../utils/getIcon';

const Weather = ({ weather }) => (
  <View>
    {console.log(weather)}
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
            <View style={styles.extraIcon}>
              <Icon name='weather-sunset-up' size={30} />
            </View>
            <Text style={styles.extraText}>{weather.astronomy.sunrise}</Text>
          </View>
          <View style={styles.extraItem}>
            <View style={styles.extraIcon}>
              <Icon name='weather-sunset-down' size={30} />
            </View>
            <Text style={styles.extraText}>{weather.astronomy.sunset}</Text>
          </View>
        </View>
      }
      {'wind' in weather &&
        <View style={styles.extra}>
          <View style={styles.extraItem}>
            <View style={styles.extraIcon}>
              <Icon name='weather-windy' size={30} />
            </View>
            <Text style={styles.extraText}>{weather.wind.speed} mph</Text>
          </View>
          <View style={styles.extraItem}>
            <View style={styles.extraIcon}>
              <Icon name='snowflake' size={30} />
            </View>
            <Text style={styles.extraText}>{weather.wind.chill}&deg;</Text>
          </View>
        </View>
      }
      {'atmosphere' in weather &&
        <View>
          <View style={styles.extra}>
            <View style={styles.extraItem}>
              <View style={styles.extraIcon}>
                <Icon name='swap-vertical' size={30} />
              </View>
              <Text style={styles.extraText}>{weather.atmosphere.rising}</Text>
            </View>
            <View style={styles.extraItem}>
              <View style={styles.extraIcon}>
                <Icon name='gauge' size={30} />
              </View>
              <Text style={styles.extraText}>{weather.atmosphere.pressure} in</Text>
            </View>
          </View>
          <View style={styles.extra}>
            <View style={styles.extraItem}>
              <View style={styles.extraIcon}>
                <Icon name='eye-outline' size={30} />
              </View>
              <Text style={styles.extraText}>{weather.atmosphere.visibility} mi</Text>
            </View>
            <View style={styles.extraItem}>
              <View style={styles.extraIcon}>
                <Icon name='water-percent' size={30} />
              </View>
              <Text style={styles.extraText}>{weather.atmosphere.humidity}%</Text>
            </View>
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
    paddingVertical: 3
  },
  temp: {
    fontSize: 65,
    fontWeight: 'bold',
    margin: 10,
    marginRight: 0
  },
  forecast: {
    display: 'flex',
    paddingVertical: 30,
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
    paddingTop: 30,
  },
  extra: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },  
  extraItem: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  extraIcon: {
    width: '35%',
    alignItems: 'flex-end'
  },
  extraText: {
    width: '65%',
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 20
  }
})

export default Weather;