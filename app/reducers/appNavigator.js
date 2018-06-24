import createReducer from '../lib/createReducers';
import * as types from '../actions/types';
export const navigateTo = createReducer({},{
  [types.APP_NAVIGATE_TO](state,action){
      return action.options
  }
});
