import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions/index';
import { withRouter } from 'react-router-native';
import StudentList from '../components/studentList';

mapStateToProps= (state) => ({})

function mapDispatchToProps( dispatch ) {
  return bindActionCreators(actionCreators,dispatch);
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(StudentList));
