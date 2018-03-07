import React from 'react';

import HoursTable from './HoursTable';

import './ModalContent.css';
import formatNext from '../utils/formatNext';

const ModalContent = ({ item }) => (
  <div>
    <div className="headerContain">
      <div className="titleContain">
        <h1 className="modalTitle">{item.title}</h1>
        <p className="modalSubtitle">{formatNext(item.open)}</p>
      </div>
      {item.open.state
        ? <div className="modalOpenIndicator"></div> 
        : <div className="modalClosedIndicator"></div>}
    </div>
    <div className="timeTableContain">
      {item.overview && <div className="row">
        <p>{item.overview}</p>
      </div>}
      {item.phone && <div className="row">
        <p>Call: {item.phone}</p>
      </div>}
      {item.address && <div className="row">
        <p>{item.address}</p>
      </div>}
      {item.menu && <div className="row">
        <a href={item.menu}><p>View Menu</p></a>
      </div>}
      {item.order && <div className="row">
        <p className="row">Order Online:&nbsp;&nbsp;{item.order.map((orderItem, index) => (
          <a key={index} href={orderItem.url}><span>{orderItem.title}</span></a>
        ))}</p>
      </div>}
      <HoursTable hours={item.open.table} />
    </div>
  </div>
);

export default ModalContent;