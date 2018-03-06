import React from 'react';

import './FeedItem.css';

const FeedItem = ({ item, currentState }) => (
  <div className="feedItem">
    <div className="textContain">
      <h4 className="mainText">{item.title}</h4>
      <p className="subText">{item.openingHours}</p>
    </div>
    <div className="indicatorContain">
      {currentState 
        ? <div className="openIndicator"></div> 
        : <div className="closedIndicator"></div>}
    </div>
  </div>
);

export default FeedItem;