import {GET_GROUPS, CREATE_GROUP, GET_GROUP, DELTET_GROUP } from '../actions/types';
import _ from 'lodash';

export default function groupsReducer(state={}, action) {

  switch (action.type) {
    case GET_GROUPS:
      return _.mapKeys(action.payload.data.data, 'id');
    case CREATE_GROUP:
      return {...state, [action.payload.data.data.id]:action.payload.data.data};
    case GET_GROUP:
      return {...state, [action.payload.data.data.id]:action.payload.data.data};
    case DELTET_GROUP:
      if(action.payload.response){
        return state;
      }
      return _.omit(state, action.payload);
  }
  return state;
}
