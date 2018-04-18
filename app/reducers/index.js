import { combineReducers } from 'redux';
import * as AlertReducers from './alert';

export default combineReducers(Object.assign({},
  AlertReducers,
));
