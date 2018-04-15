import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const Header = ({ modalHandler }) => (
  <View style={styles.contain}>
    <Text style={styles.title}>Open CU</Text>
    <Text>Weather</Text>
  </View>
)

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
  }
})

export default Header;