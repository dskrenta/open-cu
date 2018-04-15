import React from 'react';
import moment from 'moment';
import { Text, StyleSheet } from 'react-native';

export default function formatNext(hours) {
  if (hours.next) {
    return (
      <Text style={hours.state ? styles.openText : styles.closedText}>
        {hours.state ? 'Open' : 'Closed'} until {hours.next.getDay() === new Date().getDay() 
          ? moment(hours.next).format('h:mm a') 
          : moment(hours.next).format('dddd h:mm a')}
      </Text>
    );
  }
  return (<Text className="openText">Open 24/7</Text>);
}

const styles = StyleSheet.create({
  openText: {
    color: '#2ed573'
  },
  closedText: {
    color: '#ff4757'
  }
})