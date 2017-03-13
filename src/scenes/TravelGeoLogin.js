import React,{Component} from 'react';
import {View,Text, StyleSheet, ScrollView, Alert,AsyncStorage} from 'react-native';

import {Button} from 'react-native-material-ui'
import TextField from 'react-native-md-textinput';
import Spinner from 'react-native-spinkit'

import firebase,{firebaseApp} from './../config/firebaseConfig'



class TravelGeoLogin extends Component {
  constructor(props){
    super(props);

    this.state = {
      email:'',
      password:'',
      loading:false
    }
  }
  async loginHandler(){
    this.setState({loading:true})
    try {
      let user = await firebaseApp.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
      console.log(user);
      this.setState({loading:false})
    } catch (e) {
      switch (e.code) {
        case 'auth/invalid-email':
          Alert.alert('Invalid Email', "Please enter a valid email address", [{text:"OK", onPress:()=>{this.setState({password:''})}}])
          break;
        case 'auth/wrong-password':
          Alert.alert('Invalid Credentials', "Email and the password doesn't match. Try signing up if you don't already have an account or use foreget password option if you have forgotten your password", [{text:"OK", onPress:()=>{this.setState({password:''})}}])
          break;
        default:
          Alert.alert(e.code, e.message)
      }
      console.log(e);
      this.setState({loading:false})

    }

  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.loginFromContainer}>
          <View style={styles.textContainer}>
            <View style={styles.textField}><TextField
              label={'Email'}
              // highlightColor={'#00BCD4'}
              onChangeText={(text)=>{this.setState({email:text})}}
              value={this.state.email}
              height={40}
              labelColor={'#FFFFFF'}
              textColor={'#FFFFFF'}
              highlightColor={'yellow'}
              dense={true}

            /></View>
            <View style={styles.textField}><TextField
              onChangeText={(text)=>{this.setState({password:text})}}
              value={this.state.password}
              label={'Password'}
              textColor={'white'}
              height={40}
              highlightColor={'yellow'}
              labelColor={'#FFFFFF'}
               secureTextEntry={true}

            /></View>
          </View>
          <Button disabled={this.state.loading}
            icon={
              <Spinner isVisible={this.state.loading} size={25} type="Wave" color={'white'}/>

            } raised primary text={(this.state.loading)?"":"Login"} onPress={this.loginHandler.bind(this)}/>
        </View>
      </ScrollView>
    );
  }
}

const styles= StyleSheet.create({
  loginFromContainer:{
    // backgroundColor:'pink',
  },
  container:{
    backgroundColor:'#2196F3',
    flex:1,
    paddingLeft:50,

    paddingRight:50
  },
  button:{
    marginTop:20
  },
  textContainer:{
    paddingBottom:50,

  },
  textField:{
    marginBottom:15,
  }
});

export default TravelGeoLogin;
