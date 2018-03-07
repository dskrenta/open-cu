import React from 'react';
import moment from 'moment';

export default function formatNext(hours) {
  if (hours.next) {
    return (
      <span className={`${hours.state ? 'open' : 'closed'}Text`}>
        {hours.state ? 'Open' : 'Closed'} until {hours.next.getDay() === new Date().getDay() 
          ? moment(hours.next).format('h:mm a') 
          : moment(hours.next).format('dddd h:mm a')}
      </span>
    );
  }
  return (<span className="openText">Open 24/7</span>);
}