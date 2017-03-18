import React,{Component} from 'react';
import {View,Text, StyleSheet, ToolbarAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button,COLOR} from 'react-native-material-ui'

import {firebaseApp} from './../config/firebaseConfig'
import MapView from 'react-native-maps';
import MapCallout from './../components/MapCallout.js';

const LATITUDE_DELTA = .9;//roughly equalant to 100km
const LONGITUDE_DELTA = .9;//roughly equalant to 100km

class NearByAttractions extends Component {
  static navigationOptions = {
    header:{
      visible:false,
    }
  }
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: -41.2634,
        longitude: 174.9479,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      attractions:[]
    }
  }
  componentWillMount(){
    firebaseApp.database().ref('attractions').once('value').then((snapshot)=>{
      console.log("Snapshot",snapshot.val());

      //converting the objects into an arrray an store it in the state
      let keys = Object.keys(snapshot.val());

      let attractions = keys.map((key,i)=>{
        return {
          id:key,
          ...snapshot.val()[key]
        }
      })
      console.log("ATTR", attractions);
      this.setState({attractions:attractions})
    },(error)=>{
      // this.setState({isLoading:false})
      console.log("ERROr", error);
    })
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
       console.log("position",position);
        this.setState({region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
       console.log("new position",position);
      this.setState({region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }});

    })
  }

  render() {
    let {attractions} = this.state;
    // console.log(attractions);
    return (
      <View style ={styles.container}>
       <MapView
         showsUserLocation={true}
         style={styles.map}
         region={this.state.region}
         zoomEnabled={true}
         loadingEnabled={true}
         showsUserLocation = {true}
         showsMyLocationButton={true}
         showsCompass={true}
       >
          {
            attractions.map((attr,i)=>{
              // console.log("all locations",attr.name);

              if(attr.location!= undefined){
                console.log("location",attr.location);
                return (
                <MapView.Marker
                  title={attr.name}
                  key={i}
                  coordinate={{latitude:attr.location.latitude,longitude:attr.location.longitude}}
                  onCalloutPress={()=>{
                    this.props.navigation.navigate("Attraction",{attraction:attr})
                  }}
                >
                  <MapView.Callout>
                    <MapCallout title={attr.name} description={attr.description} imageUrl={attr.imageUrl}/>
                  </MapView.Callout>
                </MapView.Marker>
                );
              }

            })
          }

       </MapView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   flex:1,
   marginLeft:8,
   justifyContent: 'flex-end',
   alignItems: 'center',

   backgroundColor:COLOR.green500,
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default NearByAttractions;
