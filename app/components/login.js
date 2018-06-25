import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      isSearching: false,
      userId: '',
      password:'',
    }
  }
  // static getDerivedStateFromProps(nextProps,nextState){
  //   console.log("*****");
  // }
  handleLogin(options){
    console.log('login pressed');
    setTimeout( function(){this.props.history.push({pathname:'/base', state: {}})}.bind(this),5000);

  }

  checkLoginSatus() {
    return this.props.loginSuccess;
  }
  render(){
    const quote = '"The purpose of art is washing the dust of daily life off our souls - Pablo Picassa."';
    const loginError = '*Insert a valid User ID and Password.'
    return <KeyboardAvoidingView behavior='padding' style = { styles.container } enabled>
            <View style = { styles.logoContainer }>
              <View style = { styles.imageContainer }>
                <Image style = { styles.logo }
                  source={ require('../asset/school.png') }></Image>
              </View>
              <View style = { styles.textContainer }>
                <Text style = { styles.quote }>{ quote }</Text>
              </View>
            </View>
            <View style = { styles.loginForm }>
              { !this.checkLoginSatus() && <View style = { styles.loginErrorContainer }><Text style = { styles.loginError }>{ loginError }</Text></View>}
              <View style = { styles.inputContainer }>
                <TextInput style={ styles.input }
                  placeholder='User ID'
                  placeholderTextColor = '#ffffff'
                  returnKeyType='next'
                  onSubmitEditing={ ()=> this.passwordInput.focus() }
                  autoCorrect = { false }
                  autoCapitalize = 'none'
                  onChangeText = { (userId) => { this.setState({ userId: userId })} }
                  value = { this.state.userId }>
                </TextInput>
              </View>
              <View style = { styles.inputContainer }>
                <TextInput style={ styles.input }
                  placeholder='Password'
                  placeholderTextColor = '#ffffff'
                  secureTextEntry returnKeyType='go'
                  ref={ (input) => this.passwordInput = input }
                  onChangeText = { (password) => { this.setState({ password: password })} }
                  onSubmitEditing = {() => this.handleLogin({ userId: this.state.userId, password: this.state.password}) }
                  value = { this.state.password }>
                </TextInput>
              </View>
              <View style = { styles.inputContainer }>
                <TouchableOpacity
                  onPress = { () => this.handleLogin({ userId: this.state.userId, password: this.state.password}) }
                  style={ styles.loginButton }>
                    <Text style={styles.loginText}>
                     Login
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
          </KeyboardAvoidingView>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55E6C1',
  },
  logoContainer: {
    flex: 5,
  },
  imageContainer: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width:150,
    height:150,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    paddingRight: 20,
    paddingLeft: 20,
  },
  quote: {
    flex: 1,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginForm: {
    flex: 2,
  },
  loginErrorContainer:{
    alignItems:'center',
  },
  loginError: {
    color: 'red',
  },
  inputContainer: {
    flex:1,
    justifyContent: 'flex-start',
    paddingRight: 20,
    paddingLeft: 20,
  },
  input:{
    height: 35,
    paddingHorizontal: 10,
    fontSize: 15,
    color: '#fff',
    backgroundColor: '#9AECDB',
  },
  loginButton:{
    height: 40,
    backgroundColor: '#58B19F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText:{
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
export default Login;
