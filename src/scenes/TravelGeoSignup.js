import React,{Component} from 'react';
import {View,Text, StyleSheet, ScrollView, Alert} from 'react-native';

import {Button, Subheader, COLOR} from 'react-native-material-ui'
import TextField from 'react-native-md-textinput';
import Spinner from 'react-native-spinkit';


import firebase, {firebaseApp} from './../config/firebaseConfig'


class TravelGeoSignup extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false, //determine whether to show the spinner, Signup text
      email:'',
      password:''
    }
  }
  async signupHandler(){
    this.setState({loading:true})

    //contacting the firebase and try to create a user if fails returns an alert message to the user
    try {
      let test = await firebaseApp.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
      this.setState({loading:false, email:'', password:''})
      console.log(test);
    } catch (e) {

      switch (e.code) {
        case "auth/invalid-email":
          Alert.alert("Wrong email","Please enter a valid email address",[{text:"OK", onPress:()=>{this.setState({password:''})}}])
          break;
        case "auth/weak-password":
          Alert.alert("Week Password",e.message, [{text:"OK", onPress:()=>{this.setState({password:''})}}])
          break;
        case "auth/email-already-in-use":
          Alert.alert("Oops","That email address is already in use. Try login in.", [{text:"OK", onPress:()=>{this.setState({password:''})}}])
          break;
        default:
          Alert.alert(e.code,e.message, [{text:"OK", onPress:()=>{this.setState({password:''})}}])
      }

      this.setState({loading:false})
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <Subheader text="Create a TravelGeo account now. It's Free"/>
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
          <Button
            disabled={this.state.loading}
            icon={
              <Spinner isVisible={this.state.loading} size={25} type="Wave" color={'white'}/>
            }
            raised primary text={(this.state.loading)?"":"Signup"}
            onPress={this.signupHandler.bind(this)}/>
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
    backgroundColor: COLOR.green500,//'#2196F3',
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

export default TravelGeoSignup;
