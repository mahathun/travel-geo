import React,{Component} from 'react';
import {View,Text, StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button} from 'react-native-material-ui'


class DrawerHeader extends Component {

  render() {
    return (
      <View style={{marginBottom:15}}>
        <Image
           style={{
               width:  50 ,
               height:  50 ,
               marginVertical:10,
               borderRadius: 25,
             }}
             resizeMode={"cover"}
             source={{uri:'https://unsplash.it/100/100/?blur&random'}}
             //source={{uri:'https://placehold.it/150/ffffff?text=FY'}}
             //source={require('../images/logo_a_color.png')}
         />
      </View>
    );
  }
}

export default DrawerHeader;
