import { expect } from '../test_helper';
import searchReducer from '../../src/reducers/reducer_search';
import { SEARCH   } from '../../src/actions/types';

describe('Categories Reducer', () => {
  it('handles action with unknown type', () => {
    expect(searchReducer(undefined, {})).to.eql({});
  });

  it('handles action of type GET_USERS', () => {
    const action = { type: SEARCH, payload: {
        data: {
          data: {"user": {id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}}
        }
    }};
    expect(searchReducer([], action)).to.eql({"user":{id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}});
  });

});
