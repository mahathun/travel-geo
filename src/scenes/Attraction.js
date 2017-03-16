import React,{Component} from 'react';
import {View,Text, StyleSheet, ToolbarAndroid,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button,COLOR} from 'react-native-material-ui'
import {firebaseApp} from './../config/firebaseConfig'
import { TabLayoutAndroid } from "react-native-android-kit";
import {NavigationActions} from 'react-navigation'

class Attraction extends Component {

  static navigationOptions={
    title:({state})=> state.params.attraction.name,
    header:{
      visible:true,
      style:{
        backgroundColor:COLOR.blue700,
      },
      titleStyle:{
        color:'white'
      }
    }
  }
  render() {
    let {attraction} = this.props.navigation.state.params;
    // const setParamsAction = NavigationActions.setParams({
    //   title: "New title", // these are the new params that will be merged into the existing route params
    //   // The key of the route that should get the new params
    //   key: 'Attraction',
    // })
    // this.props.navigation.dispatch(setParamsAction)
    // console.log("state",this.state);
    return (
      <View style={{flex:1}}>
                <View style={styles.imageView}>
                  <Image
                     style={{flex:1}}
                       resizeMode={"cover"}
                        source={{uri:attraction.imageUrl}}
                       //source={{uri:attraction.imageUrl}}
                       //source={require('../images/logo_a_color.png')}
                   />
                </View>
                <View style={styles.tabView}>
                  <TabLayoutAndroid style={{height:60}} backgroundColor='#2196F3' indicatorTabColor='#ffc400'
                                    indicatorTabHeight={2} scrollable={false} center={false}>

                      <TabLayoutAndroid.Item
                        style={styles.tabContent}
                        text='Reviews'
                        textSize={16}
                        textColor="white"
                        selectedTextColor='#ffc400'
                        icon='ic_home_black_24dp'
                        iconPosition='left'>

                          <ScrollView style={styles.aboutScrollView}>
                            <Text style={styles.tabText}>reviews</Text>
                          </ScrollView>

                      </TabLayoutAndroid.Item>

                      <TabLayoutAndroid.Item
                        style={styles.tabContent}
                        text='About'
                        textSize={16}
                        textColor='white'
                        selectedTextColor='#ffc400'
                        icon='ic_important_devices_black_24dp'
                        iconPosition='left'>

                            <ScrollView style={styles.aboutScrollView}>
                              <Text style={styles.tabText}>{attraction.description}</Text>
                            </ScrollView>

                      </TabLayoutAndroid.Item>

                      <TabLayoutAndroid.Item
                        style={styles.tabContent}
                        text='Gears Needed'
                        textSize={16} textColor='white'
                        selectedTextColor='#ffc400'
                        icon='ic_important_devices_black_24dp'
                        iconPosition='left'>

                          <ScrollView style={styles.aboutScrollView}>
                            <Text style={styles.tabText}>geers needed</Text>
                          </ScrollView>

                      </TabLayoutAndroid.Item>

                  </TabLayoutAndroid>
                </View>

            </View>
    );
  }
}

const styles = StyleSheet.create({
  imageView:{
    flex:3,
  },
  tabView:{
    flex:4,
    backgroundColor:'#2196F3'
  },
  tabContent:{
    borderTopWidth:2,
    borderTopColor:'rgba(99, 99, 99, 0.72)',
    shadowColor:'red'
  },
  aboutScrollView:{
    padding:5,

  },
  tabText:{
    textAlign:'justify',
    color:'white'
  },
})

export default Attraction;
