import React from 'react';

import './ModalContent.css';

const ModalContent = ({ item }) => (
  <div>
    <div className="headerContain">
      <div className="titleContain">
        <h1 className="modalTitle">{item.title}</h1>
        <p className="modalSubtitle">Closed until 7:00am Friday</p>
      </div>
      {item.open
        ? <div className="modalOpenIndicator"></div> 
        : <div className="modalClosedIndicator"></div>}
    </div>
    <div className="timeTableContain">
      <p>{item.openingHours}</p>
    </div>
  </div>
);

export default ModalContent;