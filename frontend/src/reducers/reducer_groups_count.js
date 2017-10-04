import {GET_GROUPS_COUNT} from '../actions/types';

export default function groupsCountReducer(state=0, action) {

  switch (action.type) {
    case GET_GROUPS_COUNT:
      return action.payload.data.data;
  }
  return state;
}
