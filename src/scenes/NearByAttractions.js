import React,{Component} from 'react';
import {View,Text, StyleSheet, ToolbarAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button} from 'react-native-material-ui'

import {firebaseApp} from './../config/firebaseConfig'

class NearByAttractions extends Component {

  render() {
    return (
      <View>
        <Text>NearByAttractions</Text>
      </View>
    );
  }
}

export default NearByAttractions;