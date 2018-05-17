const geocoder_key = process.env.REACT_APP_GEOCODER_API_KEY;
const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${geocoder_key}&address=`

const Geocoder = {

  search(address){
    return fetch(url+address)
    .then(response => response.json())
    .then(data => data.results[0].geometry.location)
  }


}

export default Geocoder;
