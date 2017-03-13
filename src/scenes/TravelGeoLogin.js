import React,{Component} from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';

import {Button} from 'react-native-material-ui'
import TextField from 'react-native-md-textinput';

class TravelGeoLogin extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName:'',
      password:''
    }
  }
  loginHandler(){
    console.log('Login clicked');
    console.log('userName', this.state.userName);
    console.log('password', this.state.password);
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.loginFromContainer}>
          <View style={styles.textContainer}>
            <View style={styles.textField}><TextField
              label={'User Name'}
              // highlightColor={'#00BCD4'}
              onChangeText={(text)=>{this.setState({userName:text})}}
              value={this.state.userName}
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
          <Button raised primary text="Login" onPress={this.loginHandler.bind(this)}/>
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
