/* jshint esversion:6 */
import React,{Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Subheader,COLOR, Button, Divider,Toolbar } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

import AdvanceSearch from './../components/AdvanceSearch';

class SearchAttractions extends Component {
  constructor(props){
    super(props);

    this.state = {
      advanceSearch:false,
    }
  }

  render() {
    let {navigate} = this.props.navigation;
    let{advanceSearch} = this.state;
    return (

      <ScrollView style={styles.container}>
        <Toolbar
           onLeftElementPress={()=>navigate('DrawerOpen')}
           leftElement="menu"
           centerElement="Search Attractions"
           rightElement={(advanceSearch)? "info":"info-outline"}
           onRightElementPress={()=>this.setState({advanceSearch:!advanceSearch})}
           searchable={{
             autoFocus: true,
             placeholder: 'Search',
             onSubmitEditing:()=>navigate('DrawerOpen')
           }}
         />
         {(this.state.advanceSearch)?  <AdvanceSearch/> : null}

        <Text style={styles.recentText}>Recent</Text>
        <Divider />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLOR.green200,
  },
  recentText:{
    textAlign:'center',

  }
});

export default SearchAttractions;
