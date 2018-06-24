import { combineReducers } from 'redux';
import * as AlertReducers from './alert';
import * as ClassReducers from './class';
import * as LoginReducers from './login';
import * as appNavigatorReducers from './appNavigator';

export default combineReducers(Object.assign({},
  AlertReducers,
  ClassReducers,
  LoginReducers,
  appNavigatorReducers,
));
