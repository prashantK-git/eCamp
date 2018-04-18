import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions/index';
import Home from './home';
import {View} from 'react-native';

class AppContainer extends Component {
  render(){
    return <Home {...this.props}/>
  }
}
// empty state passed
mapStateToProps= (state) => ({})

function mapDispatchToProps( dispatch ) {
  return bindActionCreators(actionCreators,dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(AppContainer);
