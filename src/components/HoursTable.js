import React from 'react';

import './HoursTable.css';

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const HoursTable = ({ hours }) => (
  <div className="hoursTable">
    {hours && <h4 className="hoursLabel">Business Hours:</h4>}
    {(hours && hours['ph']) && delete hours['ph']}
    {hours && Object.keys(hours).map((hour, index) => (
      <div className="hoursRow">
        <p>{days[index]}</p>
        <p>{hours[hour].length > 0 ? hours[hour] : 'Closed'}</p>
      </div>
    ))}
  </div>
)

export default HoursTable;