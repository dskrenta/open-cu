import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableHighlight, Platform, ScrollView, StatusBar } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import opening_hours from 'opening_hours';

import Header from './Header';
import FeedItem from './FeedItem';
import FeedSection from './FeedSection';
import data from '../data.json';
import SimpleOpeningHours from '../utils/simple-opening-hours'; 

class Home extends React.Component {
  state = {
    modalVisible: false,
    modalContent: null
  }

  modalHandler = (newState, newContent) => {
    this.setState({ modalVisible: newState, modalContent: newContent });
  }

  render() {
    const cuDiningStates = data.cuDining.map(item => {
      const oh = new opening_hours(item.openingHours);
      return {
        state: oh.getState(),
        next: oh.getNextChange(),
        table: new SimpleOpeningHours(item.openingHours).getTable()
      };
    });

    const recStates = data.rec.map(item => {
      const oh = new opening_hours(item.openingHours);
      return {
        state: oh.getState(),
        next: oh.getNextChange()
      };
    });

    const diningStates = data.dining.map(item => {
      const oh = new opening_hours(item.openingHours);
      return {
        state: oh.getState(),
        next: oh.getNextChange()
      };
    });

    const utilitiesStates = data.utilities.map(item => {
      const oh = new opening_hours(item.openingHours);
      return {
        state: oh.getState(),
        next: oh.getNextChange()
      };
    });

    return (
      <View style={styles.contain}>
        <StatusBar barStyle={this.state.modalVisible ? 'dark-content' : 'light-content'} />
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.modalHandler(false, null)}}
        >
          <View style={styles.modalContain}>
            <ScrollView style={{flex: 1}}>
              {this.state.modalContent}
            </ScrollView>
            <TouchableHighlight
              onPress={() => {this.modalHandler(false, null)}}
              style={styles.modalClose}
              underlayColor='#08b'
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <Header modalHandler={this.modalHandler} />
        <ScrollView>
          <View style={styles.innerScrollView}>
            <FeedSection label="On Campus Dining">
              {data.cuDining.map((item, index) => (
                <FeedItem
                  key={index}
                  modalHandler={this.modalHandler}
                  item={item} 
                  hours={cuDiningStates[index]} 
                />
              ))}
            </FeedSection>
            <FeedSection label="CU Recreational">
              {data.rec.map((item, index) => (
                <FeedItem 
                  item={item} 
                  hours={recStates[index]} 
                  modalHandler={this.modalHandler}
                  key={index}
                />
              ))}
            </FeedSection>
            <FeedSection label="Off Campus Dining">
              {data.dining.map((item, index) => (
                <FeedItem 
                  item={item} 
                  modalHandler={this.modalHandler}
                  key={index}
                  hours={diningStates[index]}
                />
              ))}
            </FeedSection>
            <FeedSection label="Utilities">
              {data.utilities.map((item, index) => (
                <FeedItem 
                  item={item} 
                  modalHandler={this.modalHandler}
                  key={index}
                  hours={utilitiesStates[index]}
                />
              ))}
            </FeedSection>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    height: '100%',
    width: '100%',
    ...Platform.select({
      ios: {
        ...ifIphoneX({
          paddingTop: 180
        }, {
          paddingTop: 70
        })
      },
      android: {
        paddingTop: 50
      }
    })
  },
  modalContain: {
    height: '100%',
    ...Platform.select({
      ios: {
        ...ifIphoneX({
          paddingTop: 130
        }, {
          paddingTop: 20
        })
      },
      android: {
        paddingTop: 0
      }
    })
  },
  modalClose: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: '#0ae',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: 'white',
    fontSize: 18,
  },
  innerScrollView: {
    paddingBottom: 20
  }
})

export default Home;