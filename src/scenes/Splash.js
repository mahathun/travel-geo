import React,{Component} from 'react';
import {
  View,Text, StyleSheet
} from 'react-native';
import {Subheader, COLOR} from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome';

import Spinner from 'react-native-spinkit'

import firebase, {firebaseApp} from './../config/firebaseConfig'

class Splash extends Component {
  constructor(props){
    super(props)
    this.checkUser = this.checkUser.bind(this)
  }
  async checkUser(){
    await firebaseApp.auth().onAuthStateChanged((user)=>{
      console.log("U", user);

      if(user){
        this.props.navigation.dispatch({
          type: 'Navigation/RESET',index:0,actions:[{type:'Navigation/NAVIGATE',routeName:'Main'}]
        });
        // this.props.navigation.navigate('Main')
        //console.log("Main", user);

      }else{
        this.props.navigation.dispatch({
          type: 'Navigation/RESET',index:0,actions:[{type:'Navigation/NAVIGATE',routeName:'Login'}]
        });
        // this.props.navigation.navigate('Login')
        //console.log("Login", user);

      }

    })

  }
  componentDidMount(){
    this.checkUser(this)
  }
  render() {
    return (
      <View style={styles.splashContainer}>
        <Spinner size={40} type="ThreeBounce" color={'white'}/>
        {/* <Text>Loading</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splashContainer:{
    backgroundColor:COLOR.green500,//'#2196F3',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Splash;
