import { SEARCH } from '../actions/types';

export default function searchReducer(state={}, action) {

  switch (action.type) {
    case SEARCH:
      return {... action.payload.data.data};
  }
  return state;
}
