/* jshint esversion:6 */
import React,{Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Subheader,COLOR, Button, Divider,Toolbar } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as firebaseAppMethods from './../api/firebaseAppMethods';

import AdvanceSearch from './../components/AdvanceSearch';
import CustomCard from './../components/CustomCard';

class SearchAttractions extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading:false,
      advanceSearch:false,
      searchResults:[],
    }

    //this.Search = this.Search.bind(this);
  }

  async Search(x){
    let searchText = x.refs.toolbar.state.searchValue.toLowerCase();

    if(searchText!= undefined && searchText.length>0){
      this.setState({isLoading:true});
      let attractions = await firebaseAppMethods.getAttractions();
      //console.log("Search text", searchText);
      //filtering the attractions
      let filteredData = attractions.filter((attr)=>{
        return attr.name.toLowerCase().match(searchText);
      });
      //console.log("SearchAttractions clicked", filteredData);
      this.setState({isLoading:false, searchResults:filteredData});
    }

  }

  render() {
    let {navigate} = this.props.navigation;
    let{advanceSearch, searchResults} = this.state;
    return (

      <ScrollView style={styles.container}>
        <Toolbar
          ref="toolbar"
          onChangeText={this.Search}
           onLeftElementPress={()=>navigate('DrawerOpen')}
           leftElement="menu"
           centerElement="Search Attractions"
           rightElement={(advanceSearch)? "info":"info-outline"}
           onRightElementPress={()=>this.setState({advanceSearch:!advanceSearch})}
           searchable={{
             autoFocus: true,
             placeholder: 'Search',
             onSubmitEditing:()=>this.Search(this)
           }}
         />
         {(this.state.advanceSearch)?  <AdvanceSearch/> : null}

         {
           searchResults.map((attr,i)=>{
             return <CustomCard
                        attraction={attr}
                        key={i}
                        onPress={()=>{
                            this.props.navigation.navigate('Attraction',{attraction:attr})

                        }}
                      />
           })
         }

        {(searchResults.length==0)?<View>
          <Text style={styles.recentText}>Recent</Text>
          <Divider />
        </View>:null}
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
