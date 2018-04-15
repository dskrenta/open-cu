import React from 'react';
import WeatherIcon from 'react-icons-weather';

import './WeatherModal.css';

const WeatherModal = ({ weather }) => (
  <div>
    <div className="weatherHeader">
      <h1>{weather.item.condition.temp}&deg;</h1>
      <div className="column">
        <WeatherIcon name="yahoo" iconId={weather.item.condition.code} className="weatherIcon" />
        <p>{weather.item.condition.text}</p>
      </div>
    </div>
    <div className="forecastContain">
      <h3>Forecast for {weather.location.city}, {weather.location.region}:</h3>
      <table className="forecastTable">
        <thead>
          <tr>
            <th className="forecastDate">Date</th>
            <th>Conditions</th>
            <th>High</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {weather.item.forecast.map((day, index) => (
            <tr key={index} className="forecastRow">
              <td className="forecastDate">{day.date}</td>
              <td><WeatherIcon name="yahoo" iconId={day.code} className="tableWeatherIcon" /></td>
              <td>{day.high}</td>
              <td>{day.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
) 

export default WeatherModal;