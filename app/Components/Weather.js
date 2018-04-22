import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import getIcon from '../utils/getIcon';
import getColors from '../utils/getColors';

const Weather = ({ weather }) => {
  const colors = getColors(weather.item.condition.code);

  return (
    <View>
      <LinearGradient 
        colors={colors.gradient}
        style={styles.header}
        start={{x: 0.0, y: 0}} 
        end={{x: 0.0, y: 1.0}}
      >
        <Text style={[styles.location, colors.text]}>Boulder, CO</Text>
        <Text style={[styles.condition, colors.text]}>{weather.item.condition.text}</Text>
        <View style={styles.row}>
          <Icon name={getIcon(weather.item.condition.code)} style={[styles.mainIcon, colors.text]} size={65} />
          <Text style={[styles.temp, colors.text]}>{weather.item.condition.temp}&deg;</Text>
        </View>
      </LinearGradient>
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
                  <Icon name='gauge' size={30} />
                </View>
                <Text style={styles.extraText}>{Math.round((weather.atmosphere.pressure/33.7685)*10)/10} inHg</Text>
              </View>
              <View style={styles.extraItem}>
                <View style={styles.extraIcon}>
                  <Icon name='swap-vertical' size={30} />
                </View>
                <Text style={styles.extraText}>{(weather.atmosphere.rising === 2) ? 'Falling' : (weather.atmosphere.rising === 1) ? 'Rising' : 'Steady'}</Text>
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
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingBottom: 80
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
  },
  condition: {
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
  },
  mainIcon: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
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
    marginLeft: 10,
    marginRight: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 3
  },
  forecast: {
    display: 'flex',
    marginTop: -40,
    paddingBottom: 0,
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
    // borderColor: '#ddd'
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
    paddingVertical: 10
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