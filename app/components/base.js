import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabRoutes, TabRoute } from './core/TabRoutes';
import { NativeRouter as Router, Route, Redirect } from 'react-router-native';
import Home from './home';
import StudentList from './studentList';
import Settings from './settings';

export default class Base extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { defaultView } = this.props;
    return <Router>
            <View style={{ flex: 1, marginTop: 20 }}>
              <Route path="/" exact render={() => <Redirect to= {defaultView}/>}/>
              <TabRoutes>
                  <TabRoute path="/home"
                    renderContent={(props) => (
                      <Home {...this.props}/>
                    )}
                    renderTab={({ isActive }) => (
                      <Text style={{ color: isActive ? 'blue' : null }}>
                        Home
                      </Text>
                    )}
                  />

                  <TabRoute path="/studentList"
                    renderContent={(props) => (
                      <StudentList {...this.props}/>
                    )}
                    renderTab={({ isActive }) => (
                        <Text style={{ color: isActive ? 'blue' : null}}>
                          Students
                        </Text>
                    )}
                  />

                  <TabRoute path="/settings"
                    renderContent={(props) => (
                      <Settings {...this.props}/>
                    )}
                    renderTab={({ isActive }) => (
                      <Text style={{ color: isActive ? 'blue' : null }}>
                        Settings
                      </Text>
                    )}

                  />
              </TabRoutes>
            </View>
          </Router>
  }
}
