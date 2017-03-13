/* jshint esversion:6 */

import React, { Component } from 'react';
import { Navigator, NativeModules, View, Text, Button } from 'react-native';

import { COLOR, ThemeProvider } from 'react-native-material-ui';

import Login from './Login'
import Main from './Main'
import TravelGeoLogin from './TravelGeoLogin'

import { StackNavigator } from 'react-navigation';


// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class TravelGeo extends Component {
  render() {
      const App = StackNavigator({
              Login: { screen: Login },
              TravelGeoLogin: { screen: TravelGeoLogin },
              });

        return (
            <ThemeProvider uiTheme={uiTheme}>
              <App />

             </ThemeProvider>
        );
    }
}
