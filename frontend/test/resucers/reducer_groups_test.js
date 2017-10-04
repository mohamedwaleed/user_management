import { expect } from '../test_helper';
import categoriesReducer from '../../src/reducers/reducer_groups';
import { GET_GROUPS, CREATE_GROUP, GET_GROUP, DELTET_GROUP  } from '../../src/actions/types';

describe('Categories Reducer', () => {
  it('handles action with unknown type', () => {
    expect(categoriesReducer(undefined, {})).to.eql({});
  });

  it('handles action of type GET_GROUPS', () => {
    const action = { type: GET_GROUPS, payload: {
        data: {
          data: [{id: 1, name: "Group1", category: "Sports"}]
        }
    }};
    expect(categoriesReducer([], action)).to.eql({"1":{id: 1, name: "Group1", category: "Sports"}});
  });

  it('handles action of type CREATE_GROUP', () => {
    const action = { type: CREATE_GROUP, payload: {
        data: {
          data: {id: 1, name: "Group1", category: "Sports"}
        }
    }};
    expect(categoriesReducer([], action)).to.eql({"1":{id: 1, name: "Group1", category: "Sports"}});
  });


  it('handles action of type GET_GROUP', () => {
    const action = { type: GET_GROUP, payload: {
        data: {
          data: {id: 1, name: "Group1", category: "Sports"}
        }
    }};
    expect(categoriesReducer([], action)).to.eql({"1":{id: 1, name: "Group1", category: "Sports"}});
  });

  it('handles action of type DELTET_GROUP', () => {
    const action = { type: DELTET_GROUP, payload: 1};
    expect(categoriesReducer({"1":{id: 1, name: "Group1", category: "Sports"}}, action)).to.eql({});
  });
});
