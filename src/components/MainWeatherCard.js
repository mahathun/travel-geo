/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class MainWeatherCard extends Component {
  render() {
    return (
      <Card >
        <Image style={{position:'absolute'}}
          source={require('./../res/header_bg2.jpg')} />

        <View style={styles.container}>

          <View style={styles.weatherRow}>
            <Text style={styles.weatherTempText}>25C</Text>

            <Icon style={styles.weatherIcon} size={40} name={"weather-cloudy"} />

          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Taradale</Text>
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
