require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const http = require('http');

const app = express();

const darkSky_key = process.env.REACT_APP_DARK_SKY_API_KEY;
const url = `https://api.darksky.net/forecast/${darkSky_key}/`;
const locationsObj = {lat: 41.9703133, lng: -87.663045}

app.use('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

app.get('/darksky/', (req, res) => {
	const locationsObj = req.query;
	fetch(`${url}${locationsObj.lat},${locationsObj.lng}`)
	  .then(response => response.json())
	  .then(data => {
	  	res.send(data);
	  });
});

const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(port);
console.log("Server listening on:", port);