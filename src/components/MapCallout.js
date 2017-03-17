/* jshint esversion:6 */
import React,{Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

class MapCallout extends Component {

  render() {
    let {title,description,imageUrl} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {console.log(imageUrl)}
          <Image style={{flex:1}} source={{uri:imageUrl}} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.calloutTitleContainer}><Text style={styles.calloutTitleText}>{title}</Text></View>
          <View style={styles.calloutDescription}><Text>{description}</Text></View>
          <View style={styles.calloutRating}><Text>Rating</Text></View>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    height:90,
     width:250,
    //  backgroundColor:'pink',
     flexDirection:'row'
  },
  imageContainer:{
    backgroundColor:'red',
    flex:1,

  },
  textContainer:{
    paddingLeft:5,
    // backgroundColor:'blue',
    flex:2,
    justifyContent:'space-between'
  },
  calloutTitleContainer:{
    // backgroundColor:'skyblue',
    flex:1,
  },
  calloutTitleText:{
    fontWeight:'bold',
  },
  calloutDescription:{
    // backgroundColor:'black',
    flex:3,
  },
  calloutRating:{
    backgroundColor:'white',
    flex:1,
  }
});

export default MapCallout;
