import React,{Component} from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button, Card} from 'react-native-material-ui'


class CustomCard extends Component {


  render() {
    let {attraction} = this.props;

    return (
      <View>
        <Card onPress={this.props.onPress} style={{
          container: {
            borderRadius: 5,
            margin:20
          }
        }}>
        <View>
          <Image
             style={{height:150}}
               resizeMode={"cover"}
              //  source={require('./../res/header_bg.jpg')}
               source={{uri:attraction.imageUrl}}
               //source={require('../images/logo_a_color.png')}
           />
        </View>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>{attraction.description}</Text>
        </View>
        {/* <View style={styles.cardButtonArea}>
          <View style={styles.cardButton}><Text></Text></View>
          <View style={styles.cardButton}><Button text="test"/></View>
        </View> */}
        </Card>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  cardTextContainer:{
    margin:8,
    // height:80,
    paddingBottom:8
  },
  cardText:{
    textAlign:'justify',
    // backgroundColor:'pink',
    maxHeight:80
  },
  cardButtonArea:{
    // backgroundColor:'pink',
    flexDirection:'row'
  },
  cardButton:{
    flex:1,
    // backgroundColor:'blue'
  }
})

export default CustomCard;
