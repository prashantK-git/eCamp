import React, { Component} from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Settings extends Component{

  getPic(){

  }
  getUserDetails(){

  }
  getContactDetails(){

  }
  getOtherDetails(){

  }
  getHelpDetails(){

  }
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return <View style={styles.settingsContainer}>
              <View style={styles.headerContainer}>
                 <Icon name="arrow-back" color='#fff' size={23} style={{padding:5}}/>
                 <Text style={styles.headerText}>Settings</Text>
              </View>
              <View style={styles.imageDataContainer}>
                <View style={styles.imageContainer}>
                   <Image source={pic} style={styles.image}/>
                </View>
                <View style={styles.dataContainer}>
                  <Text>Vikas Gupta</Text>
                  <Text>vikasgupta8357@gmail.com</Text>
                </View>
              </View>
              <View style={styles.contentContainer}>
                  <View style={styles.details}>
                   <Icon name="account-circle" color='black' size={23} style={{padding:10}} />
                   <TouchableHighlight onPress = {()=>this.getUserDetails()}>
                     <Text style={styles.text}>Account</Text>
                    </TouchableHighlight>
                  </View>
                  <View style={styles.details}>
                   <Icon name='call' color='black' size={23} style={{padding:10}} />
                   <TouchableHighlight onPress = {()=>this.getContactDetails()}>
                     <Text style={styles.text}>Contact Us</Text>
                   </TouchableHighlight>
                  </View>
                  <View style={styles.details}>
                     <Icon name='chat' color='black' size={23} style={{padding:10}} />
                     <TouchableHighlight onPress = {()=>this.getHelpDetails()}>
                       <Text style={styles.text}>Chat</Text>
                     </TouchableHighlight>
                   </View>
                  <View style={styles.details}>
                   <Icon name='help' color='black' size={23} style={{padding:10}} />
                   <TouchableHighlight onPress = {()=>this.getHelpDetails()}>
                     <Text style={styles.text}>Help</Text>
                   </TouchableHighlight>
                  </View>
              </View>
           </View>
  }
}
mapStateToProps = (state) => ({})

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  imageDataContainer: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9acd32',
    alignItems:'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  dataContainer: {
    alignItems: 'center',
 },
 image: {
   width: 150,
   height: 150,
   borderWidth: 1,
   borderColor: 'grey'
 },
 contentContainer: {
    flex: 3,
    backgroundColor: 'white',
  },
  text: {
    width: 360,
    height: 50,
    fontSize: 20,
    fontWeight: 'normal',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: 'grey',
  }
});
export default connect(mapStateToProps)(Settings);
