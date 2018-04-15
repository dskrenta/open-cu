import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedSection = ({ label, children }) => {
  return (
    <View>
      <View style={styles.labelContain}>
        <View style={styles.line} />
        <View><Text style={styles.text}>{label}</Text></View>
        <View style={styles.line} />
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  labelContain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#888'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
    color: '#888'
  }
})

export default FeedSection;