import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemContent = ({ item, hours }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
)

const styles = StyleSheet.create({

})

export default ItemContent;