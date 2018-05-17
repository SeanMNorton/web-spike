import React, { Component } from 'react';

import './WeatherDisplay.css';

class WeatherDisplay extends Component {

  renderWeather(){
    const {weather} = this.props;
    if (weather.hourly) {
      return (
        <div id='weather-data' className='container'>
          <div className='icon'> {weather.minutely.icon} </div>
          <div className='temp'> {weather.hourly.data[0].temperature}</div>
          <div className='weather-summary'> {weather.minutely.summary} </div>
        </div>
      )
    } else {
      return (
        <div id='weather-data' className='container'>
          <div className='no-weather'>No Weather Yet.</div>
        </div>
      )
    }
  }

  render() {
    return (
      this.renderWeather()
    );
  }

}

export default WeatherDisplay;
