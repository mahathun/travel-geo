import React,{Component} from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'

import DrawerHeader from './DrawerHeader'

class DrawerContent extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    var navitems =[
    {
      screen: 'ScreenOne',
      displayName:'ScreenOne',
    },
    {
      screen: 'ScreenTwo',
      displayName:'ScreenTwo',
    },
]

    return  (
      <View style={{borderWidth:0, flex:1, backgroundColor:'#aaa', marginTop:-20, paddingTop:40}}>
        <DrawerHeader />

        <View>
        {
            navitems.map((l,i)=>{
              return (<TouchableOpacity
                          key={i}
                          style={styles.item_touchableOpacity}
                          onPress={
                            ()=>{
                                this.props.navigation.navigate(l.screen)
                                }
                          }>

                          <View
                            style={styles.item_text_container}>
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
    borderColor:'#fff',
  },
  item_text:{
    fontSize:15,
    color:'#fff'
  }
});
export default DrawerContent;
