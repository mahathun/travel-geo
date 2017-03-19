/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, ScrollView, StyleSheet} from 'react-native';
import {Toolbar, COLOR} from 'react-native-material-ui';

import MainWeatherCard from './../components/MainWeatherCard';
import SubWeatherCard from './../components/SubWeatherCard';

class Weather extends Component {

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
            onSubmitEditing:()=>this.Search(this)
          }}
        />

        <MainWeatherCard />
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
