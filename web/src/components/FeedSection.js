import React from 'react';

import './FeedSection.css';

const FeedSection = ({ label, children }) => (
  <div>
    <h4 className="separator"><span>{label}</span></h4>
    {children}
  </div>
)

export default FeedSection;