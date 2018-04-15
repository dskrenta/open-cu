import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HoursTable = ({ hours }) => (
  <View>
    <Text style={styles.header}>Business Hours:</Text>
    {Object.keys(hours).map((hour, index) => (
      <View key={index} style={styles.hourRow}>
        <Text style={styles.hourText}>{hour}</Text>
        <Text style={styles.hourText}>{hours[hour].length > 0 ? hours[hour] : 'Closed'}</Text>
      </View>
    ))}
  </View>
)

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  hourRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 5
  },
  hourText: {
    fontSize: 16,
  }
})

export default HoursTable;