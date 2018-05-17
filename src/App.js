import React, { Component } from 'react';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';
import WeatherForm from './Components/WeatherForm/WeatherForm';


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
                      "temperature": 22.8,
                      "apparentTemperature": 16.46
                    }
                  ]
                }
    }
  }
}

  searchWeather(searchValue){
    console.log(searchValue);
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
