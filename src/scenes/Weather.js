/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, ScrollView, StyleSheet, AsyncStorage,Alert} from 'react-native';
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
      recentSearches:[],

    }

    this.getWeather = this.getWeather.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount(){
    this.getWeather();
    // let data = await getWeatherByLocation();
    // console.log("Data",data);

  }

  async componentWillMount(){
    try {
      let recentSearches = JSON.parse(await AsyncStorage.getItem("@travelGeo:recentSearches"));
      console.log(recentSearches);
      // Alert.alert(recentSearches);

      for(var i=0;i<recentSearches.length;i++){
        if(recentSearches[i].location){
          let response = await getWeatherByLocation(recentSearches[i].location.latitude,recentSearches[i].location.longitude);

          recentSearches[i].currentWeatherData = response;
        }
      }

      console.log("recentSearchesWithWeatherData", recentSearches);
      this.setState({recentSearches:recentSearches});

    } catch (e) {
    // Alert.alert(e.toString());
    }
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
    let {currentLocationWeatherData,recentSearches} = this.state;

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
        {recentSearches.map((attr,i)=>{
          return <SubWeatherCard key={i} attraction={attr} />
        })}

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
