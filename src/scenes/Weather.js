/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, ScrollView, StyleSheet} from 'react-native';
import {Toolbar, COLOR} from 'react-native-material-ui';

import {getWeatherByLocation} from './../api/weatherAPI'

import MainWeatherCard from './../components/MainWeatherCard';
import SubWeatherCard from './../components/SubWeatherCard';

class Weather extends Component {

  constructor(props){
    super(props);

    this.state ={
      currentLocationWeatherData:null,
      isLoading:false,
    }

    this.getWeather = this.getWeather.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount(){
    this.getWeather();
    // let data = await getWeatherByLocation();
    // console.log("Data",data);

  }

  async getWeatherData(){
    console.log("Weather data");
    let {lat, long} = this.state.currentLocation;
    let response = await getWeatherByLocation(lat,long);
    this.setState({currentLocationWeatherData:response.data});
    console.log("Data",response.data);
  }
  getWeather(){

    navigator.geolocation.getCurrentPosition(
      (position) => {
       console.log("position",position);

        this.setState({currentLocation:{lat:position.coords.latitude, long:position.coords.longitude}})
        //let weatherData = getWeatherByLocation(position.coords.latitude,position.coords.longitude);
        //console.log("WeatherData", weatherData);
        this.getWeatherData();
      },
      (error) => alert("Make sure you have enabled GPS"),//error.message
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}//check if 1000 is in ms and need to set it for 10min
    );



  //  console.log("WeatherData",weatherData);
  }

  render() {
    let {navigate} = this.props.navigation;
    let {currentLocationWeatherData} = this.state;
    //console.log(currentLocationWeatherData.name);
    return (
      <ScrollView style={style.container}>
        <Toolbar
          leftElement='menu'
          onLeftElementPress={()=>navigate('DrawerOpen')}
          centerElement="Weather"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
            onSubmitEditing:()=>this.getWeatherByCity(this)
          }}
        />

        {(currentLocationWeatherData!= null)? <MainWeatherCard weather={currentLocationWeatherData}/>:null}
        <SubWeatherCard />
        <SubWeatherCard />
        <SubWeatherCard />
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container:{
    backgroundColor: COLOR.green200,
  }
});

export default Weather;
