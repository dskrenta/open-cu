import React from 'react';

import './FeedItem.css';

const FeedItem = ({ item, hours }) => (
  <div className="feedItem">
    <div className="textContain">
      <h4 className="mainText">{item.title}</h4>
      <p className="subText">{hours.state ? `Open until ${hours.next.toString()}` : `Closed until ${hours.next.toString()}`}</p>
    </div>
    <div className="indicatorContain">
      {hours.state
        ? <div className="openIndicator"></div> 
        : <div className="closedIndicator"></div>}
    </div>
  </div>
);

export default FeedItem;