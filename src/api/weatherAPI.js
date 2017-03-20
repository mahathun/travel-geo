//http://api.openweathermap.org/data/2.5/weather?q=London&appid=APPID

var axios = require('axios');

import APPID from './../config/weatherAPIConfig';


let url = `http://api.openweathermap.org/data/2.5/weather?appid=${APPID}`

//retrive the weather from lattitude and longitude
export let getWeatherByLocation = (lat,long)=>{
  return axios.get(url, {
      params: {
        // q:'colombo',
        lat:lat,
        lon:long,
        units:'metric'
      }
    })
    .then(function (response) {
      return response;
      //console.log(response);
    })
    .catch(function (error) {
      return null;
      //console.log(error);
    });

}
