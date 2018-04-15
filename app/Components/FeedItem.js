import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

import ItemContent from './ItemContent';
import formatNext from '../utils/formatNext';

const FeedItem = ({ modalHandler, item, hours }) => (
  <TouchableHighlight 
    onPress={() => {modalHandler(true, (<ItemContent item={item} hours={hours} />))}}
    underlayColor="#eee"  
  >
    <View style={styles.contain}>
      {'imageUrl' in item && <Image source={{uri: item.imageUrl}} style={styles.image} />}
      <View style={styles.textContain}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        {'address' in item && 
        <Text style={styles.subText} numberOfLines={1}>{item.address}</Text>}
        <Text style={styles.subText} numberOfLines={1}>{formatNext(hours)}</Text>
      </View>
      <View style={[ styles.indicator, hours.state ? {backgroundColor: '#2ed573'} : {backgroundColor: '#ff4757'} ]}></View>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  contain: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  indicator: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    marginLeft: 15,
    marginRight: 0
  },
  textContain: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 15,
    color: '#666',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 15
  }
})

export default FeedItem;