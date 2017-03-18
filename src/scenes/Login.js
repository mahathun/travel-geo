import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Avatar, Subheader, Button, COLOR } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = (<Icon name="rocket" size={30} color="#900" />)

import firebase,{firebaseApp} from './../config/firebaseConfig'

class Login extends Component {
  _navigate(){
    this.props.navigation.navigate('TravelGeoAccount')

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconSection}>
          <View style={styles.iconSectionOne}>

          </View>
          <View style={styles.iconSectionTwo}>
            <Avatar style={{
              container:{
                backgroundColor:COLOR.green200//'#90CAF9'
              }
            }} size={150} image={<Image style={{width:110,height:110}} source={require('./../res/travel-geo-logo-icon.png')} />} />

          </View>
          {/* <View style={styles.iconSectionThree}><Text>Three</Text></View> */}
        </View>
        <View style={styles.loginSection}>
          <Subheader style={{text:styles.subHeaderText, container:styles.subHeaderContainer}}  text="Login Using "/>

          <View style={styles.buttonGroup}>
            <Button style={{
              container:styles.button
            }} icon={
              <Icon name="facebook-square" size={20} style={{color:'blue'}} />
            } raised  text="  Facebook" />
            <Button style={{
              container:styles.button
            }} icon={
              <Icon name="google-plus-square" size={20}  style={{color:'red'}}/>
            } raised text="  G+" />

            <Button style={{
              container:styles.button
            }} icon={
              <Icon name="google-plus-square" size={20}  style={{color:'red'}}/>
            } raised text="  Github" />

          </View>
            {/* <Subheader style={{text:styles.subHeaderText, container:styles.subHeaderContainer}} text="Or have a Travel Geo account"/> */}
            <Button style={{
              container:{
                marginLeft:10,
                marginRight:10
              }
            }} icon={
              <Icon name="globe" size={20}  style={{color:'lightgreen'}}/>
            } raised accent text="  Travel Geo Account" onPress={ () => this._navigate() }
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLOR.green500,//'#2196F3',
    flex:1,
  },
  iconSection:{
    // backgroundColor:'pink',
    flex:4,
  },
  loginSection:{
    // backgroundColor:'yellow',
    flex:2,
    justifyContent:'space-between',
    paddingBottom:20
  },
  iconSectionOne:{
    // backgroundColor:'red',
    flex:1,
  },
  iconSectionTwo:{
    // backgroundColor:'green',
    flex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonGroup:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',

  },
  button:{
    // marginLeft:10,
    // marginRight:5
  },
  subHeaderText:{
    color:'white',
    textAlign:'center',
  },
  subHeaderContainer:{
    margin:10
  }

});

export default Login;
