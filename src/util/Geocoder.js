const geocoder_key = process.env.REACT_APP_GOOGLE_API_KEY;
const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${geocoder_key}&address=`

const Geocoder = {

  search(zipCode){
    return fetch(url+zipCode)
    .then(response => response.json())
    .then(data => data.results[0].geometry.location)
  }


}

export default Geocoder;
