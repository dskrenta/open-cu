import React from 'react';

import FeedItem from './FeedItem';
import FeedSection from './FeedSection';

import './Feed.css';

const Feed = ({ data, currentState }) => (
  <div className="feedContain">
    <FeedSection label="CU Dining">
      {data.cuDining.map((item, index) => (
        <FeedItem key={index} item={item} currentState={currentState[index]} />
      ))}
    </FeedSection>
  </div>
);

export default Feed;