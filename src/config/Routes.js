import React,{Component} from 'react';

import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'

import firebase, {firebaseApp} from './firebaseConfig'

import Main from './../scenes/Main'
import Splash from './../scenes/Splash'
import Login from './../scenes/Login'
import TravelGeoAccount from './../scenes/TravelGeoAccount'
import TravelGeoLogin from './../scenes/TravelGeoLogin'
import TravelGeoSignup from './../scenes/TravelGeoSignup'
import ScreenOne from './../scenes/ScreenOne'
import ScreenTwo from './../scenes/ScreenTwo'

import DrawerContent from './../components/DrawerContent'



/*
**There are two copies of the same object need to be maintain two locations
** obj1 : DrawerRoutes (in src/config/Routes.js) = which defines actual routes
** obj2 : navitems (in src/components/DrawerContent.js) = which is used to populate the content with the display name etc.
***** WHEN EVER UPDATE A DRAWE ROUTE, BOTH PLACES MUST BE UPDATED *******
*/
const DrawerRoutes ={
  ScreenOne: {
    screen: ScreenOne
  },
  ScreenTwo: {
    screen: ScreenTwo
  },

};

export const DrawerStack = DrawerNavigator(DrawerRoutes,
  {
    initialRouteName:'ScreenOne',
    contentComponent:({navigation})=> <DrawerContent navigation={navigation} />,
  }
)

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
  Splash:{
    screen: Splash,
    navigationOptions:{
      title:'Splash',
      header:{
        visible:false
      }
    }
  },
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
    screen: DrawerStack,
    navigationOptions:{
      title:'Welcome'
    }
  }
}
);
