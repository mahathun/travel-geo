/* jshint esversion:6 */
import React,{Component} from 'react';
import {View,Text, ScrollView, StyleSheet} from 'react-native';
import {Toolbar, COLOR} from 'react-native-material-ui';



class AddAttractions extends Component {

  render() {
    let {navigate} = this.props.navigation;
    return (
      <ScrollView style={style.container}>
        <Toolbar
          leftElement='menu'
          onLeftElementPress={()=>navigate('DrawerOpen')}
          centerElement="Add Attractions"

        />
        <Text>add attractions</Text>

      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container:{
    backgroundColor: COLOR.green200,
  }
});

export default AddAttractions;
