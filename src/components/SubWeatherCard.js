/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SubWeatherCard extends Component {
  render() {
    let {attraction} = this.props;
    let weatherData = (attraction.currentWeatherData)? attraction.currentWeatherData:null;
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

    return (
      <Card >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={{flex:1}}
              source={{uri:attraction.imageUrl}} />


          </View>
          <View style={styles.weatherColumn}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>{attraction.name}</Text>
              <Text style={styles.locationSuburbText}>{(weatherData)?`(${weatherData.data.name})`:""}</Text>
            </View>
            <View style={styles.weatherRow}>
              <Text style={styles.weatherTempText}>{(weatherData)?`${weatherData.data.main.temp}C`:""}</Text>
              {(weatherData)?<Icon style={styles.weatherIcon} size={40} name={iconArray[weatherData.data.weather[0].icon]} />:<Text>unavailable</Text>}
              {(weatherData)?<Text>{weatherData.data.weather[0].description}</Text>:null}
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height:100,
    // padding:10,
    // flex:1,
    flex:1,
    flexDirection:'row'
  },
  imageContainer:{
    backgroundColor:'pink',
    flex:2,
  },
  weatherColumn:{
    // backgroundColor:'yellow',
    flex:4,
    margin:5
  },
  weatherRow:{
    // backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    // flex:1,
  },
  weatherTempText:{
    // color:'white',
    fontSize:20,
    marginRight:8,
  },
  weatherIcon:{
    // color:'white',
    // fontSize:40,
  },
  locationContainer:{
    // backgroundColor:'green'
  },
  locationText:{
    // color:'white',
    fontSize:20,
    // textAlign:'right'
  },
  locationSuburbText:{
    fontSize:14,

  },
});

export default SubWeatherCard;
