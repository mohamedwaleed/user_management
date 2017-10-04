import { CREATE_USER, GET_USERS, GET_USER, DELTET_USER } from '../actions/types';
import _ from 'lodash';

export default function usersReducer(state={}, action) {

  switch (action.type) {
    case CREATE_USER:
      if(action.payload.response) {
        return state;
      }
      return {...state, [action.payload.data.data.id]:action.payload.data.data};
    case GET_USERS:
      return _.mapKeys(action.payload.data.data, 'id');
    case GET_USER:
      return {...state, [action.payload.data.data.id]:action.payload.data.data};
    case DELTET_USER:
      return _.omit(state, action.payload);
  }
  return state;
}
