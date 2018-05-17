import React, { Component } from 'react';

import './WeatherDisplay.css';

class WeatherDisplay extends Component {

  render() {
    const {weather} = this.props;
    return (
      <div className='container'>
        <div className='icon'> {weather.hourly.icon} </div>
        <div className='weather-summary'> {weather.hourly.summary} </div>
      </div>
    );
  }

}

export default WeatherDisplay;
