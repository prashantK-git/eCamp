import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions/index';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Login from './loginContainer';
import Base from './baseContainer';
import StudentList from './studentContainer';

class AppContainer extends Component {
  static childContextTypes = {
    user:PropTypes.object
  }
  getChildContext = ()=> ({
    user: {}
  })

  constructor(props){
    super(props);
    console.log("actions:"+ this.props)
  }

  render(){
    return <Router >
                <View style={{flex:1}} {...this.props}>
                    <Switch>
                     <Route exact path='/' render = { () => {
                       return <Login {...this.props} />
                     }}/>
                     <Route path='/base' render = {() => {
                       return <Base {...this.props} defaultView = '/home'/>
                     }}/>
                     <Route path='/studentList' render = {() => {
                       return <StudentList {...this.props}/>
                     }}/>
                    </Switch>
                </View>
          </Router>

  }
}
//empty state passed
mapStateToProps= (state) => ({
  navigateParam: state.navigateTo
});

function mapDispatchToProps( dispatch ) {
  return bindActionCreators(actionCreators,dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(AppContainer);
