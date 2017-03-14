import React,{Component} from 'react';
import {View,Text, StyleSheet, ToolbarAndroid,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-material-ui'
import {firebaseApp} from './../config/firebaseConfig'
import { TabLayoutAndroid } from "react-native-android-kit";

class Attraction extends Component {
  render() {
    return (
      <View style={{flex:1}}>
                <View style={styles.imageView}>
                  <Image
                     style={{flex:1}}
                       resizeMode={"cover"}
                        source={require('./../res/header_bg.jpg')}
                       //source={{uri:attraction.imageUrl}}
                       //source={require('../images/logo_a_color.png')}
                   />
                </View>
                <View style={styles.tabView}>
                  <TabLayoutAndroid style={{height:60}} backgroundColor='#2196F3' indicatorTabColor='#ffc400'
                                    indicatorTabHeight={2} scrollable={false} center={false}>

                      <TabLayoutAndroid.Item style={styles.tabContent} text='Reviews' textSize={16} textColor="white" selectedTextColor='#ffc400'
                                  icon='ic_home_black_24dp' iconPosition='left'>

                          <Text>I'm the first Tab content!</Text>

                      </TabLayoutAndroid.Item>

                      <TabLayoutAndroid.Item style={styles.tabContent} text='Gears Need' textSize={16} textColor='white' selectedTextColor='#ffc400'
                                  icon='ic_important_devices_black_24dp' iconPosition='left'>

                          <Text>I'm the second Tab content!</Text>

                      </TabLayoutAndroid.Item>

                      <TabLayoutAndroid.Item style={styles.tabContent} text='About' textSize={16} textColor='white' selectedTextColor='#ffc400'
                                  icon='ic_important_devices_black_24dp' iconPosition='left'>

                          <Text>I'm the third Tab content!</Text>

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
  }
})

export default Attraction;
