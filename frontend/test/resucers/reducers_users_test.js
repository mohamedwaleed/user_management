import { expect } from '../test_helper';
import categoriesReducer from '../../src/reducers/reducer_users';
import { CREATE_USER, GET_USERS, GET_USER, DELTET_USER   } from '../../src/actions/types';

describe('Categories Reducer', () => {
  it('handles action with unknown type', () => {
    expect(categoriesReducer(undefined, {})).to.eql({});
  });

  it('handles action of type GET_USERS', () => {
    const action = { type: GET_USERS, payload: {
        data: {
          data: [{id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}]
        }
    }};
    expect(categoriesReducer([], action)).to.eql({"1":{id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}});
  });

  it('handles action of type CREATE_USER', () => {
    const action = { type: CREATE_USER, payload: {
        data: {
          data: {id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}
        }
    }};
    expect(categoriesReducer([], action)).to.eql({"1":{id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}});
  });


  it('handles action of type GET_USER', () => {
    const action = { type: GET_USER, payload: {
        data: {
          data: {id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}
        }
    }};
    expect(categoriesReducer([], action)).to.eql({"1":{id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}});
  });

  it('handles action of type DELTET_USER', () => {
    const action = { type: DELTET_USER, payload: 1};
    expect(categoriesReducer({"1":{id: 1, email: "mohamedwaleed2012@gmail.com", firstName: "Mohamed", lastName: "Waleed", gender: "male"}}, action)).to.eql({});
  });
});
