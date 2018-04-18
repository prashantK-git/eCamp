import * as types from './types';
import Api from '../lib/Api';

export function searchedAlert() {
  return {
    type: types.SEARCHED_ALERT,
  }
}
export function getAlerts(options) {
  console.log(`alert:${options.alertInput}`);
  return (dispatch,getState) => {
      return Api.get('/alerts.js').then(response => {
        dispatch(setAlerts({alerts: response.cards}))
      }).catch(ex => {
        console.log(ex);
      })
  }
}
export function setAlerts({alerts}){
  return{
    type: types.SET_ALERTS,
    alerts
  }
}
