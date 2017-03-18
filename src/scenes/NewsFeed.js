/* jshint esversion:6 */
import React,{Component} from 'react';
import {ScrollView,View,Text, StyleSheet, ToolbarAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button, COLOR} from 'react-native-material-ui';

import {firebaseApp} from './../config/firebaseConfig';
import CustomCard from './../components/CustomCard';
import {NavigationActions} from 'react-navigation';
import Spinner from 'react-native-spinkit';


class NewsFeed extends Component {
  static navigationOptions={
    title:'Welcome',
    header:({state,setParams,navigate})=>(
      {
              visible:true,
              style:{
                backgroundColor:COLOR.green500,
              },
              titleStyle:{
                color:'white'
              },
              left: <Button
                        onPress={()=>navigate('DrawerOpen')}
                        style={{ marginRight:10}}
                        text=""
                        icon= {<Icon name="bars" size={20} style={{color:'white',}} />}
                      />


            }
    )
  }

  constructor(props){
    super(props);
    this.state = {isLoading:true,  attractions:[]};

    // retrieving the attractions from the database
    firebaseApp.database().ref('attractions').once('value').then((snapshot)=>{
      console.log("Snapshot",snapshot.val());
      //converting the objects into an arrray an store it in the state
      let keys = Object.keys(snapshot.val());
      let attractions = keys.map((key,i)=>{
                                  return {id:key, ...snapshot.val()[key]}
                                });

      this.setState({isLoading:false,attractions:attractions});
    },(error)=>{
      this.setState({isLoading:false});
      console.log("ERROr", error);
    });
  }


  render() {


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
