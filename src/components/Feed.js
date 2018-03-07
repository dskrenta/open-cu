import React from 'react';
import { Dialog } from 'material-ui';
import opening_hours from 'opening_hours';

import data from '../data.json';
import FeedItem from './FeedItem';
import FeedSection from './FeedSection';
import ModalContent from './ModalContent';

import './Feed.css';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      activeItem: null,
    }
  }

  handleOpen = (item, open) => {
    item.open = open;
    this.setState({ activeItem: item, open: true });
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  renderDialogContent = () => {
    if (!this.state.activeItem) return null;
    return (<ModalContent item={this.state.activeItem} />);
  }
  
  render() {
    const cuDiningStates = data.cuDining.map(item => {
      const oh = new opening_hours(item.openingHours);
      return {
        state: oh.getState(),
        next: oh.getNextChange()
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

    return (
      <div className="feedContain">
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={{width: '95%', maxWidth: 700}}
        >
          {this.renderDialogContent()}
        </Dialog>
        <FeedSection label="On Campus Dining">
          {data.cuDining.map((item, index) => (
            <div key={index} onClick={() => {this.handleOpen(item, cuDiningStates[index].state)}}>
              <FeedItem item={item} hours={cuDiningStates[index]} />
            </div>
          ))}
        </FeedSection>
        <FeedSection label="CU Recreational">
          {data.rec.map((item, index) => (
            <div key={index} onClick={() => {this.handleOpen(item, recStates[index])}}>
              <FeedItem item={item} hours={recStates[index]} />
            </div>
          ))}
        </FeedSection>
        <FeedSection label="Off Campus Dining">
          {data.dining.map((item, index) => (
            <div key={index} onClick={() => {this.handleOpen(item, diningStates[index])}}>
              <FeedItem item={item} hours={diningStates[index]} />
            </div>
          ))}
        </FeedSection>
      </div>
    );
  }
}

export default Feed;