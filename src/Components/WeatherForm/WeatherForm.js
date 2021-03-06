import React, { Component } from 'react';
import './WeatherForm.css'
class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    const input = e.target.value;
    this.setState({searchValue: input});
  }

  handleClick(){
    this.props.searchWeather(this.state.searchValue);
  }

  render() {
    return (
      <div className="weather-form">
        <input onChange={this.handleChange} type='number' placeholder='ZipCode' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }

}

export default WeatherForm;
