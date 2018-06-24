import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class Class extends Component {
  getDetails(){
    this.props.alertDetails();
  }
  
  details(){
    //return {
      //console.log('details:'+ this.props.classDetails.details);
       return this.props.classDetails.hasOwnProperty('details') ? this.props.classDetails.details : null
      //return this.props.classDetails.details;
    //}
  }
  render(){
    return <View> <Text>Class Details:{this.details()}</Text>
    <TouchableHighlight onPress={()=> this.getDetails()} style = {{marginTop: 50}} >
      <Text>Search</Text>
    </TouchableHighlight>
     </View>
  }
}

export default Class;
