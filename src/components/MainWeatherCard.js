/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class MainWeatherCard extends Component {
  render() {
    let {name,main,weather} = this.props.weather;
    let iconArray = {
      "01n" : "weather-sunny",
      "02n" : "weather-partlycloudy",
      "03n" : "weather-cloudy",
      "04n" : "weather-cloudy",
      "09n" : "weather-rainy",
      "10n" : "weather-pouring",
      "11n" : "weather-lightning",
      "13n" : "weather-snowy",
      "50n" : "weather-fog",

      "01d" : "weather-sunny",
      "02d" : "weather-partlycloudy",
      "03d" : "weather-cloudy",
      "04d" : "weather-cloudy",
      "09d" : "weather-rainy",
      "10d" : "weather-pouring",
      "11d" : "weather-lightning",
      "13d" : "weather-snowy",
      "50d" : "weather-fog"
    }
    let iconUrl = './../res/weather/01n.png';
    console.log(weather[0]);
    return (
      <Card >

        <Image style={{position:'absolute'}}
          source={require('./../res/header_bg2.jpg')} />

        <View style={styles.container}>

          <View style={styles.weatherRow}>
            <Text style={styles.weatherTempText}>{main.temp}C</Text>
            {/* <Image style={{position:'absolute',zIndex:60}} source={{uri:iconUrl}} /> */}

            <Icon style={styles.weatherIcon} size={50} name={iconArray[weather[0].icon]} />

          </View>
          <View style={styles.locationContainer}>
            <Text style={{textAlign:'right',color:'white', fontSize:20}}>{weather[0].description}</Text>
            <Text style={styles.locationText}>{name}</Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height:200,
    padding:10,
    flex:1,
  },
  weatherRow:{
    // backgroundColor:'red',
    flexDirection:'row-reverse',
    flex:1,
  },
  weatherTempText:{
    color:'white',
    fontSize:40,
    marginLeft:8,
  },
  weatherIcon:{
    color:'white',
    // fontSize:40,

  },
  locationContainer:{
    // backgroundColor:'green'
  },
  locationText:{
    color:'white',
    fontSize:30,
    textAlign:'right'
  }
});

export default MainWeatherCard;
