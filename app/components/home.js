import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class Home extends Component{

  constructor(props){
    super(props);
    this.state = { isSearching: false, alertInput: '' };
  }
  searchAlerts() {
    this.setState({ isSearching: true })
    this.props.getAlerts( { alertInput: this.state.alertInput } ).then( () => {
      this.setState({ isSearching: false})
    });
  }

  alerts() {
    return Object.keys(this.props.searchAlerts).map(key => this.props.searchAlerts[key]);
  }

  render() {
    return <View style = { styles.container }>
      <View style = { styles.search }>
        <TextInput style = { styles.searchSection } placeholder = 'search' onChangeText={ ( alertInput ) => this.setState({ 'alertInput': alertInput }) } value={ this.state.alertInput } ></TextInput>
        <TouchableHighlight onPress={()=> this.searchAlerts()} style = { styles.searchButton } >
          <Text>Search Cards</Text>
        </TouchableHighlight>
      </View>
      <View style = { styles.scrollViewSection } >
        <ScrollView contentContainerStyle={ styles.contentContainer }style = { styles.scrollSection }>
          { !this.state.isSearching && this.alerts().map(alerts => {
            return <View key={alerts.id} style = { styles.alertSection }>
                      <View style = { styles.alertImageSection }><Image resizeMode= 'stretch' source = { { uri: alerts.image } } style = { styles.alertImage } ></Image></View>
                      <View style = { styles.alertTitle }><Text> {alerts.title} </Text></View>
                      <View style = { styles.alertSynopsis }><Text> {alerts.synopsis} </Text></View>
                    </View>
          })}
          { this.state.isSearching ? <Text>Searching...</Text> : null }
        </ScrollView>
      </View>
    </View>
  }
}
mapStateToProps = (state) => {
  return {
    searchAlerts: state.searchAlerts
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  search: {
    flex: 1,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row'
  },
  searchSection: {
    flex: 7
  },
  searchButton: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderBottomColor: '#000',
    borderWidth: 1
  },
  scrollViewSection: {
    flex: 11,
  },
  scrollSection: {
    flex: 1
  },
  alertsSection: {
    height: 600,
  },
  alertImageSection: {
    flex: 1
  },
  alertImage: {
    //flex: 1,
    //height:undefined,
    width:undefined,
    height:500
  },
  alertTitle: {
    flex: 1,
  },
  alertSynopsis: {
    flex:1,
  },
  contentContainer: {
    //flex:,
    //paddingVertical: 100
  },

});
export default connect(mapStateToProps)(Home);
