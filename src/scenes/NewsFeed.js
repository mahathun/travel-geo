import React,{Component} from 'react';
import {ScrollView,View,Text, StyleSheet, ToolbarAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button, COLOR} from 'react-native-material-ui'

import {firebaseApp} from './../config/firebaseConfig'
import CustomCard from './../components/CustomCard'
import {NavigationActions} from 'react-navigation'
import Spinner from 'react-native-spinkit'

// firebaseApp.database().ref('attractions').push().set({
//
// 	name:"Sigiriya",
// 	description:"Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka",
// 	imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sigiriya.jpg/300px-Sigiriya.jpg"
// })
// firebaseApp.database().ref('attractions').once('value').then((snapshot)=>{
//   console.log("Snapshot",snapshot.val());
// })
class NewsFeed extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      attractions:[]
    }


      firebaseApp.database().ref('attractions').once('value').then((snapshot)=>{
        console.log("Snapshot",snapshot.val());

        //converting the objects into an arrray an store it in the state
        let keys = Object.keys(snapshot.val());

        let attractions = keys.map((key,i)=>{
          return {
            id:key,
            ...snapshot.val()[key]
          }
        })

        this.setState({isLoading:false,attractions:attractions})
      },(error)=>{
        this.setState({isLoading:false})
        console.log("ERROr", error);
      })

  }
  static navigationOptions={
    title:'Welcome',
    header:{
      visible:true,
      style:{
        backgroundColor:COLOR.green500,
      },
      titleStyle:{
        color:'white'
      }
    }
  }
  componentWillMount(){

  }

  render() {
    console.log("attr",this.state.attractions);
    return (
        <ScrollView style={{backgroundColor:COLOR.green200}}>
          {(this.state.isLoading)?<View style={{alignItems:'center'}}><Spinner size={40} type="ThreeBounce" color={'white'}/></View>:null}
          {
            this.state.attractions.map((attraction, i)=>{
              return (<CustomCard key={i} attraction={attraction} onPress={()=>{
                  this.props.navigation.navigate('Attraction',{attraction:attraction})

              }}/>)

            })
          }
        </ScrollView>
    );
  }
}

export default NewsFeed;
