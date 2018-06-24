import createReducer from '../lib/createReducers';
import * as types from '../actions/types';

export const classDetails = createReducer( {}, {
        [types.CLASS_DETAILS](state,actions){
          return {
            details: 'coming soon...'
          }
        }
}  )
