import React, { Component } from 'react';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';
import WeatherForm from './Components/WeatherForm/WeatherForm';
import Geocoder from './util/Geocoder';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      weather: {
        "hourly": {
                  "summary": "Snow (6–9 in.) and windy starting in the afternoon.",
                  "icon": "snow",
                  "data": [
                    {
                      "time": 255589200,
                      "summary": "Mostly Cloudy",
                      "icon": "partly-cloudy-night",
                      "precipIntensity": 0,
                      "precipProbability": 0,
                      "temperature": 22.0,
                      "apparentTemperature": 16.46
                    }
                  ]
                }
    }
  }
}

  searchWeather(searchValue){
    Geocoder.search(searchValue)
    .then( location => {
      console.log(location)
    });
  }

  render() {
    return (
      <div className="App">
        <WeatherDisplay weather={this.state.weather}/>
        <WeatherForm searchWeather={this.searchWeather} />
      </div>
    );
  }
}

export default App;
