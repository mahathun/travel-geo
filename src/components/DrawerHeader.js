import React,{Component} from 'react';
import {View,Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button, Avatar} from 'react-native-material-ui'


class DrawerHeader extends Component {


  render() {
    return (
      <TouchableOpacity onPress={()=>{
        this.props.navigation.navigate('Settings')
      }}>
        <View style={styles.container}>

          <Image
             style={styles.headerBg}
               resizeMode={"cover"}
               source={require('./../res/header_bg2.jpg')}
               //source={{uri:'https://placehold.it/150/ffffff?text=FY'}}
               //source={require('../images/logo_a_color.png')}
           />

            <View style={styles.avatar}>
              <Avatar style={{
                container:{
                  backgroundColor:'#90CAF9'
                }
              }} size={80} icon={'face'} />

            </View>
            <View style={styles.settingsIcon}>
              <Icon name="cog" color="#83b4e0" size={30}/>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container:{

  },
  avatar:{
      position:'absolute',

      borderRadius: 40,

      height:80,
      width:80,
      top:40,
      left:20,
      // backgroundColor:'#90CAF9',
      zIndex:1
  },
  settingsIcon:{
    position:'absolute',
    zIndex:1,
    bottom:8,
    right:8,
  },
  headerBg:{
    height:150,
    zIndex:1
  }
});

export default DrawerHeader;
