import React from 'react';
import { View, Text, StyleSheet, Image, WebView, TouchableHighlight, Modal, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HoursTable from './HoursTable';
import formatNext from '../utils/formatNext';

class ItemContent extends React.Component {
  state = {
    webLink: undefined,
    webOpen: false,
  }

  render() {
    const { item, hours } = this.props;
    return (
      <View>
        <Modal visible={this.state.webOpen}>
          <TouchableHighlight onPress={() => {this.setState({webOpen: false})}}>
            <View style={styles.webClose}>
              <Text style={styles.closeText}>Close</Text>
            </View>
          </TouchableHighlight>
          <WebView 
            source={{uri: this.state.webLink}} 
            style={styles.webView}
            startInLoadingState={true}
            renderLoading={() => (
              <View style={styles.loadingContain}>
                <Text style={styles.loadingText}>Loading...</Text>
              </View>
            )}
          />
        </Modal>
        <View style={styles.headerContain}>
          {'imageUrl' in item && <Image source={{uri: item.imageUrl}} style={styles.image} />}
          <View style={styles.headerTextContain}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={[styles.subText, hours.state ? {color: '#2ed573'} : {color: '#ff4757'} ]}>{formatNext(hours)}</Text>
          </View>
          <View style={[styles.indicator, hours.state ? {backgroundColor: '#2ed573'} : {backgroundColor: '#ff4757'}]} />
        </View>
        <View style={styles.bodyContain}>
          {'overview' in item && <Text style={styles.bodyText}>{item.overview}</Text>}
          {'address' in item && 
            <View style={styles.detailContain}>
              <Icon name="location-on" style={styles.detailIcon} />
              <Text style={styles.detailText}>{item.address}</Text>
            </View>
          }
          {'phone' in item && 
            <View style={styles.detailContain}>
              <Icon name="phone" style={styles.detailIcon} />
              <Text style={styles.detailText}>{item.phone}</Text>
            </View>
          }
          {'menu' in item && 
            <View style={styles.detailContain}>
              <Icon name="restaurant-menu" style={styles.detailIcon} />
              <Text style={styles.detailText}>
                <TouchableHighlight 
                  onPress={() => {this.setState({webOpen: true, webLink: item.menu})}}
                  underlayColor='transparent'
                >
                  <Text style={styles.menuText}>View Menu</Text>
                </TouchableHighlight>
              </Text>
            </View>
          }
          {'order' in item && 
            <View style={styles.detailContain}>
              <Icon name="local-shipping" style={styles.detailIcon} />
              <Text style={styles.detailText}>
                {item.order.map((orderItem, index) => (
                  <TouchableHighlight 
                    key={index} 
                    onPress={() => {this.setState({webOpen: true, webLink: orderItem.url})}}
                    underlayColor='transparent'
                  >
                    <Text style={styles.orderItem}>{orderItem.title}&nbsp;&nbsp;</Text>
                  </TouchableHighlight>
                ))}
              </Text>
            </View>
          }
          {'hoursTable' in item && <HoursTable hours={item.hoursTable} />}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  bodyContain: {
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 70 
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 5,
    marginRight: 10
  },
  headerTextContain: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    flexWrap: 'wrap'
  },
  subText: {
    fontSize: 18
  },
  indicator: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 15
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 10
  },
  detailContain: {
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  detailIcon: {
    fontSize: 25,
    color: '#444',
    marginRight: 10
  },
  detailText: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  orderItem: {
    fontSize: 16,
    color: '#0645AD'
  },
  menuText: {
    marginTop: 5,
    fontSize: 16,
    color: '#0645AD'
  },
  webClose: {
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    height: Platform.OS === 'ios' ? 60 : 40,
    backgroundColor: '#0ae',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeText: {
    color: 'white',
    fontSize: 18
  },
  loadingContain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 18,
    color: '#333'
  },
  webView: {
    flex: 1
  }
})

export default ItemContent;