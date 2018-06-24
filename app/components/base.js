import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabRoutes, TabRoute } from './core/TabRoutes';
import { NativeRouter as Router, Route, Redirect } from 'react-router-native';

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
                      <View>
                        <Text style={{ fontSize: 30 }}>
                          Home
                        </Text>
                      </View>
                    )}
                    renderTab={({ isActive }) => (
                      <Text style={{ color: isActive ? 'blue' : null }}>
                        Home
                      </Text>
                    )}
                  />

                  <TabRoute path="/notifications"
                    renderContent={(props) => (
                      <View>
                        <Text style={{ fontSize: 30 }}>
                          Notifications
                        </Text>
                      </View>
                    )}
                    renderTab={({ isActive }) => (
                      <Text style={{ color: isActive ? 'blue' : null }}>
                        Notifications
                      </Text>
                    )}
                  />

                  <TabRoute path="/messages"
                    renderContent={(props) => (
                      <View>
                        <Text style={{ fontSize: 30 }}>
                          Messages
                        </Text>
                      </View>
                    )}
                    renderTab={({ isActive }) => (
                      <Text style={{ color: isActive ? 'blue' : null }}>
                        Messages
                      </Text>
                    )}
                    
                  />
              </TabRoutes>
            </View>
          </Router>
  }
}
