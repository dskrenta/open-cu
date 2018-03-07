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
      return oh.getState();
    });

    const recStates = data.rec.map(item => {
      const oh = new opening_hours(item.openingHours);
      return oh.getState();
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
        <FeedSection label="CU Dining">
          {data.cuDining.map((item, index) => (
            <div key={index} onClick={() => {this.handleOpen(item, cuDiningStates[index])}}>
              <FeedItem item={item} currentState={cuDiningStates[index]} />
            </div>
          ))}
        </FeedSection>
        <FeedSection label="CU Recreational">
          {data.rec.map((item, index) => (
            <div key={index} onClick={() => {this.handleOpen(item, recStates[index])}}>
              <FeedItem item={item} currentState={recStates[index]} />
            </div>
          ))}
        </FeedSection>
      </div>
    );
  }
}

export default Feed;