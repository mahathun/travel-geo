import React,{Component} from 'react';

import {StackNavigator, TabNavigator} from 'react-navigation'

import Main from './../scenes/Main'
import Login from './../scenes/Login'
import TravelGeoAccount from './../scenes/TravelGeoAccount'
import TravelGeoLogin from './../scenes/TravelGeoLogin'
import TravelGeoSignup from './../scenes/TravelGeoSignup'

export const TravelGeoTabNav = TabNavigator({
  TravelGeoLogin:{
    screen:TravelGeoLogin,
    navigationOptions:{
      tabBar:{
        label:'Login'
      }
    }
  },
  TravelGeoSignup:{
    screen:TravelGeoSignup,
    navigationOptions:{
      tabBar:{
        label:'Signup'
      }
    }
  }
});

export const Stack = StackNavigator({
  Login:{
    screen: Login,
    navigationOptions:{
      title:'welcome',
      header:{
        visible:false
      }
    }
  },
  TravelGeoAccount:{
    screen: TravelGeoTabNav,
    navigationOptions:{
      title:"Travel Geo Account",
      cardStack:{
        gesturesEnabled:true
      }
    }
  },
  Main:{
    screen: Main,
    navigationOptions:{
      title:'Main'
    }
  }
}
);
