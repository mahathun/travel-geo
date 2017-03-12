/* jshint esversion:6 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class TravelGeo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'skyblue'
  }
});

export default TravelGeo;
