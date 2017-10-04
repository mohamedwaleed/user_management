import { expect } from '../test_helper';
import categoriesReducer from '../../src/reducers/reducer_groups_count';
import { GET_GROUPS_COUNT } from '../../src/actions/types';

describe('Categories Reducer', () => {
  it('handles action with unknown type', () => {
    expect(categoriesReducer(undefined, {})).to.eql(0);
  });

  it('handles action of type GET_GROUPS_COUNT', () => {
    const action = { type: GET_GROUPS_COUNT, payload: {
        data: {
          data: 5
        }
    }};
    expect(categoriesReducer([], action)).to.eql(5);
  });
});
