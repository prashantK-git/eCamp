import createReducer from '../lib/createReducers';
import * as types from '../actions/types';

export const setUser = createReducer(false, {
      [types.SET_USER](state,actions){
        return !!actions.hasOwnProperty('loginSuccess') ? actions.loginSuccess : state;
      }
    });
