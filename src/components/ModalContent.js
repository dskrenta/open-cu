import React from 'react';
import * as MaterialIcon from 'react-icons/lib/md';

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
      {item.overview && <div className="overview">
        <p>{item.overview}</p>
      </div>}
      {item.phone && <div className="row">
        <p>
          <MaterialIcon.MdPhone size={18} /> 
          {item.phone}
        </p>
      </div>}
      {item.address && <div className="row">
        <p>
          <MaterialIcon.MdPlace size={18} /> 
          {item.address}
        </p>
      </div>}
      {item.menu && <div className="row">
        <p>
          <MaterialIcon.MdRestaurantMenu size={18} /> 
          <a href={item.menu}>View Menu</a>
        </p>
      </div>}
      {item.order && <div className="row">
        <p className="row">
          <MaterialIcon.MdLocalShipping size={18} />
          &nbsp;
          {item.order.map((orderItem, index) => (
            <a key={index} href={orderItem.url}><span>{orderItem.title}</span></a>
          ))}
        </p>
      </div>}
      {item.paymentAccepted && <div className="row">
        <p>
          <MaterialIcon.MdMonetizationOn size={18} style={{marginBottom: 2}} /> 
          {item.paymentAccepted}
        </p>
      </div>}
      {item.hoursTable && <HoursTable hours={item.hoursTable} />}
    </div>
  </div>
);

export default ModalContent;