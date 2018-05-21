const DarkSky = {

  search(locationsObj){
    return fetch(`http://localhost:3001/darksky/?lat=${locationsObj.lat}&lng=${locationsObj.lng}`)
      .then(response => response.json())
      .then(data => data);
  }
}

export default DarkSky;
