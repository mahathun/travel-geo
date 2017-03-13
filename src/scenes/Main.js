import React,{Component} from 'react';
import {View,Text, StyleSheet, ToolbarAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button} from 'react-native-material-ui'

import {firebaseApp} from './../config/firebaseConfig'

class Main extends Component {
  componentWillMount(){

  }
  render() {
    return (
      <View>


          <Button primary raised text="logout" onPress={()=>{
            console.log("Logged out");

            var stat = firebaseApp.auth().signOut().then(()=>{
              console.log("Signout successfull");
            }).catch((e)=>{
              console.log(e);
            })
            console.log("Logged out Status", stat);

          }}/>

      </View>
    );
  }
}

export default Main;
