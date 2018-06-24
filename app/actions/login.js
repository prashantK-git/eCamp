import * as types from './types';
import Api from '../lib/Api';

export function login(options){
  console.log('login Details:' + options);
  return (dispatch,getState)=> {
    return Api.get('/login.js').then((response) => {
      let loginSuccess = false;
      response.users && Array.isArray(response.users) && response.users.forEach(user =>{
        if(user.id === options.userId && user.password === options.password ){
          loginSuccess = true;
        }
      })

      dispatch(setUser({loginSuccess: loginSuccess}));
      return new Promise((resolve,reject) => {
        resolve(loginSuccess);
      })
    }).catch(ex => {
      console.log(ex);
    })
  }
}

export function setUser({loginSuccess}){
  return{
    type: types.SET_USER,
    loginSuccess
  }
}
