import React, {Component} from 'react';
import { View, Text } from 'react-native';

class Notification extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return <View style={{flex:1}}>
        <Text>Notifications</Text>
    </View>
  }
}

export default Notification;
