import React from 'react';
import moment from 'moment';

import './FeedItem.css';

function formatNext(hours) {
  return (
    <span className={`${hours.state ? 'open' : 'closed'}Text`}>
      {hours.state ? 'Open' : 'Closed'} until {hours.next.getDay() === new Date().getDay() 
        ? moment(hours.next).format('h:mm a') 
        : moment(hours.next).format('dddd h:mm a')}
    </span>
  );
}

const FeedItem = ({ item, hours }) => (
  <div className="feedItem">
    <div className="textContain">
      <h4 className="mainText">{item.title}</h4>
      <p className="subText">{formatNext(hours)}</p>
    </div>
    <div className="indicatorContain">
      {hours.state
        ? <div className="openIndicator"></div> 
        : <div className="closedIndicator"></div>}
    </div>
  </div>
);

export default FeedItem;