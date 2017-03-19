/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SubWeatherCard extends Component {
  render() {
    return (
      <Card >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={{flex:1}}
              source={require('./../res/header_bg2.jpg')} />


          </View>
          <View style={styles.weatherColumn}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>Taradale</Text>
            </View>
            <View style={styles.weatherRow}>
              <Text style={styles.weatherTempText}>25C</Text>
              <Icon style={styles.weatherIcon} size={40} name={"weather-cloudy"} />
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
  }
});

export default SubWeatherCard;
