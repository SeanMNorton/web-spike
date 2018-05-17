const darkSky_key = process.env.REACT_APP_DARK_SKY_API_KEY;
const url = `https://api.darksky.net/forecast/${darkSky_key}/`;

const DarkSky = {

  search(locationsObj){
    return fetch(`${url}${locationsObj.lat},${locationsObj.lng}`,{
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        mode: 'no-cors'
      }
  })
    .then(response => response.json())
    .then(data => console.log(data))
  }
}

export default DarkSky;
