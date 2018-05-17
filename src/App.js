import React, { Component } from 'react';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';
import WeatherForm from './Components/WeatherForm/WeatherForm';
import Geocoder from './util/Geocoder';
import DarkSky from './util/DarkSky';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {}
  }
  this.searchWeather = this.searchWeather.bind(this);
}

  searchWeather(searchValue){
    Geocoder.search(searchValue)
    .then( location => {
      DarkSky.search(location).then(weather =>{
        this.setState({weather: weather})
      })
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
