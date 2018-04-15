import React from 'react';

import './FeedItem.css';
import formatNext from '../utils/formatNext';

const FeedItem = ({ item, hours }) => (
  <div className="feedItem">
    {item.imageUrl && <img src={item.imageUrl} className="itemImage" alt="" />}
    <div className="textContain">
      <h4 className="mainText">{item.title}</h4>
      {item.address && <p className="subText">{item.address}</p>}
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