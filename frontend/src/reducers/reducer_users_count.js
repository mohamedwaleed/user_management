import {GET_USERS_COUNT} from '../actions/types';

export default function usersCountReducer(state=0, action) {

  switch (action.type) {
    case GET_USERS_COUNT:
      return action.payload.data.data;
  }
  return state;
}
