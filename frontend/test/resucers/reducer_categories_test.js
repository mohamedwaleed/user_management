import { expect } from '../test_helper';
import categoriesReducer from '../../src/reducers/reducer_categories';
import { GET_CATEGORIES } from '../../src/actions/types';

describe('Categories Reducer', () => {
  it('handles action with unknown type', () => {
    expect(categoriesReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type GET_CATEGORIES', () => {
    const action = { type: GET_CATEGORIES, payload: {
        data: {
          data: ['Sports', 'Social']
        }
    }};
    expect(categoriesReducer([], action)).to.eql(['Sports', 'Social']);
  });
});
