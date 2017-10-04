import { expect } from '../test_helper';
import categoriesReducer from '../../src/reducers/reducer_users_count';
import { GET_USERS_COUNT } from '../../src/actions/types';

describe('Categories Reducer', () => {
  it('handles action with unknown type', () => {
    expect(categoriesReducer(undefined, {})).to.eql(0);
  });

  it('handles action of type GET_USERS_COUNT', () => {
    const action = { type: GET_USERS_COUNT, payload: {
        data: {
          data: 5
        }
    }};
    expect(categoriesReducer([], action)).to.eql(5);
  });
});
