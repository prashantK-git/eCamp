import createReducer from '../lib/createReducers';
import * as types from '../actions/types';

export const searchedAlert = createReducer(0,{
  [types.SEARCHED_ALERT](state,action){
    return state+1;
  }
});

export const searchAlerts = createReducer({},{
  [types.SET_ALERTS](state,action){
    let newState = {};
    action.alerts.forEach((alert) => {
        newState[alert.id] = alert
    });
    return newState;
  }
});
