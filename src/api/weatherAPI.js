//http://api.openweathermap.org/data/2.5/weather?q=London&appid=APPID
// var nocache = require('superagent-no-cache');
var request = require('superagent');
import APPID from './../config/weatherAPIConfig';

// var prefix = require('superagent-prefix')('/static');

let url = `http://api.openweathermap.org/data/2.5/weather?appid=${APPID}`

//retrive the weather from lattitude and longitude
export let getWeatherByLocation = (lat,long)=>{

  console.log(url);
  request
  .get(url)
  .query({ action: 'get', q: 'wellington' }) // query string
  .end(function(err, res){
    // Do something
    console.log('ERROR', err);
    console.log('Response', res);
  });
}
