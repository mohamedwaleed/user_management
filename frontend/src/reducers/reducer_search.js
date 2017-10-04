import { SEARCH } from '../actions/types';
import _ from 'lodash';

export default function searchReducer(state={}, action) {

  switch (action.type) {
    case SEARCH:
      return {... action.payload.data.data};
  }
  return state;
}
