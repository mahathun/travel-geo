import React,{Component} from 'react';

import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'

import firebase, {firebaseApp} from './firebaseConfig'
import {COLOR} from 'react-native-material-ui';

import Main from './../scenes/Main'
import Splash from './../scenes/Splash'
import Login from './../scenes/Login'
import TravelGeoAccount from './../scenes/TravelGeoAccount'
import TravelGeoLogin from './../scenes/TravelGeoLogin'
import TravelGeoSignup from './../scenes/TravelGeoSignup'
import NewsFeed from './../scenes/NewsFeed'
import NearByAttractions from './../scenes/NearByAttractions'
import Settings from './../scenes/Settings'
import Attraction from './../scenes/Attraction'

import DrawerContent from './../components/DrawerContent'

/*
*********DRAWER ROUTES***************
**There are two copies of the same object need to be maintain two locations
** obj1 : StackedNewsfeed (in src/config/Routes.js) = which defines actual routes
** obj2 : navitems (in src/components/DrawerContent.js) = which is used to populate the content with the display name etc.
***** WHEN EVER UPDATE A DRAWER ROUTE, BOTH PLACES MUST BE UPDATED *******
*/
export const StackedNewsfeed = StackNavigator({
  NewsFeed: {
    screen: NewsFeed,
  },
  Attraction:{
    screen: Attraction,
  },
  NearByAttractions: {
    screen: NearByAttractions,
  },
})



const DrawerRoutes ={
  NewsFeedScreen: {
    screen: StackedNewsfeed,

  },
  Settings:{
    screen: Settings,
  },

};

export const DrawerStack = DrawerNavigator(DrawerRoutes,
  {
    initialRouteName:'NewsFeedScreen',
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
},{
  tabBarOptions:{
    style:{
      backgroundColor:COLOR.green600
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
      },
      header:{
        style:{
          backgroundColor:COLOR.green700
        }
      }
    }
  },
  Main:{
    screen: DrawerStack,
    navigationOptions:{
      title:'Welcome',
      header:{
        visible:false
      }
    }
  }
},
);
