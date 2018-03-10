import React from 'react';

import './HoursTable.css';

const HoursTable = ({ hours }) => (
  <div className="hoursTable">
    {hours && <h4 className="hoursLabel">Business Hours:</h4>}
    {hours && Object.keys(hours).map((hour, index) => (
      <div key={index} className="hoursRow">
        <p>{hour}</p>
        <p>{hours[hour].length > 0 ? hours[hour] : 'Closed'}</p>
      </div>
    ))}
  </div>
)

export default HoursTable;