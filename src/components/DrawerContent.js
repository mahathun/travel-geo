import React,{Component} from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import {COLOR} from 'react-native-material-ui';

import DrawerHeader from './DrawerHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class DrawerContent extends Component{
  render(){
    var navitems =[
        {
          screen: 'NewsFeed',
          displayName:'News Feed',
          icon:'newspaper'
        },
        {
          screen: 'NearByAttractions',
          displayName:'Near-by Attractions',
          icon:'map'
        },
        {
          screen: 'SearchAttractions',
          displayName:'Search Attractions',
          icon:'magnify'
        },
        {
          screen: 'Weather',
          displayName:'Weather',
          icon:'weather-partlycloudy'
        },
    ]
    return  (
      <View style={styles.container}>
        <DrawerHeader navigation={this.props.navigation}/>
        <View>
        {
            navitems.map((l,i)=>{
              return (<TouchableOpacity
                          key={i}
                          style={styles.item_touchableOpacity}
                          onPress={
                            ()=>{
                                //this.props.navigation.navigate(l.screen)
                                this.props.navigation.dispatch({
                                  type: 'Navigation/RESET',index:0,actions:[{type:'Navigation/NAVIGATE',routeName:l.screen}]
                                });
                                }
                          }>
                          <View
                            style={styles.item_text_container}>
                            {(l.icon)?<Icon size={20} style={{marginRight:10}} name={l.icon}/>:null}
                            <Text style={styles.item_text}>{l.displayName}</Text>
                          </View>
                    </TouchableOpacity>)
            })
        }
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  container:{
    borderWidth:0,
    flex:1,
    backgroundColor:COLOR.green500,//'#2196F3',
    zIndex:100
  },
  item_container:{

  },
  item_touchableOpacity:{
    marginBottom:0.5
  },
  item_text_container:{
    flexDirection:'row',
    alignItems:'center',
    height:40,
    paddingLeft:15,
    backgroundColor:'#fff0',
    borderTopWidth:0.5,
    borderColor: COLOR.green600//'#1e83d4',
  },
  item_text:{
    fontSize:15,
    color:'#fff'
  }
});
export default DrawerContent;
