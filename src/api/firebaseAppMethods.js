import {firebaseApp} from './../config/firebaseConfig';


export let getAttractions = ()=>{
  // retrieving the attractions from the database
  return firebaseApp.database().ref('attractions').once('value').then((snapshot)=>{
    //console.log("Snapshot",snapshot.val());
    //converting the objects into an arrray an store it in the state
    let keys = Object.keys(snapshot.val());
    let attractions = keys.map((key,i)=>{
                                return {id:key, ...snapshot.val()[key]}
                              });

    return attractions;
  },(error)=>{
    //this.setState({isLoading:false});
    return 'test';
    //console.log("ERROr", error);
  });
}
