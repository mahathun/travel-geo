/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, ScrollView, StyleSheet} from 'react-native';
import {Toolbar, COLOR} from 'react-native-material-ui';
// import RNCook from 'rn-cook';

import {getWeatherByLocation} from './../api/weatherAPI'

import MainWeatherCard from './../components/MainWeatherCard';
import SubWeatherCard from './../components/SubWeatherCard';

class Weather extends Component {

  constructor(props){
    super(props);


  }

  componentDidMount(){
    getWeatherByLocation();
  }

  getWeatherByCity(){

  }

  render() {
    let {navigate} = this.props.navigation;
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

        <MainWeatherCard />
        <SubWeatherCard />
        <SubWeatherCard />
        <SubWeatherCard />
        {/* <RNCook /> */}
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
