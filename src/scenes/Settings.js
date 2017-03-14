import React,{Component} from 'react'
import {View,Text,StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar, Button} from 'react-native-material-ui'
import TextField from 'react-native-md-textinput'
import Spinner from 'react-native-spinkit'
import {firebaseApp} from './../config/firebaseConfig'

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:false
    }
    this.logout = this.logout.bind(this)
  }
  async logout(){
    this.setState({
      loading:true
    });

    try{
      await firebaseApp.auth().signOut();
      this.setState({
        loading:false
      })
    }catch(e){
      console.log(e);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarArea}>
          <View style={styles.avatar}>
            <Avatar style={{
              container:{
                backgroundColor:'#90CAF9'
              }
            }} size={80} image={<Icon name="user" size={50}  style={{color:'#6796c1'}}/>} />

          </View>
        </View>
        <View style={styles.formArea}>
          <View style={styles.textField}><TextField
            label={'Email'}
            // highlightColor={'#00BCD4'}
            // onChangeText={(text)=>{this.setState({email:text})}}
            value={""}
            height={40}
            labelColor={'#FFFFFF'}
            textColor={'#FFFFFF'}
            highlightColor={'yellow'}
            dense={true}

          /></View>

          <View style={styles.textField}><TextField
            label={'Email'}
            // highlightColor={'#00BCD4'}
            // onChangeText={(text)=>{this.setState({email:text})}}
            value={""}
            height={40}
            labelColor={'#FFFFFF'}
            textColor={'#FFFFFF'}
            highlightColor={'yellow'}
            dense={true}

          /></View>
        </View>
        <View style={styles.buttonArea}>
          <Button icon={
            <Spinner isVisible={this.state.loading} size={25} type="Wave" color={'white'}/>
          } raised accent text="  Logout" onPress={this.logout}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#2196F3',
    flex:1,
  },
  avatarArea:{
    // backgroundColor:'skyblue',
    flex:4,

  },
  avatar:{
    // backgroundColor:'pink',
    flex:1,
    paddingTop:60,
    alignItems:'center'
  },
  formArea:{
    // backgroundColor:'gray',
    flex:6,
    padding:10,

  },
  textField:{

  },
  buttonArea:{
    // backgroundColor:'yellow',
    padding:10,
    flex:1,
  }
})
export default Settings
