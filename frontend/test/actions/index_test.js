import { expect } from '../test_helper';
import * as actions from '../../src/actions';
import { CREATE_USER,
        GET_GROUPS,
        GET_USERS,
        GET_CATEGORIES,
        CREATE_GROUP,
        GET_GROUPS_COUNT,
        GET_USERS_COUNT,
        GET_USER,
        GET_GROUP,
        DELTET_USER,
        DELTET_GROUP,
        JOIN_GROUP,
        DISJOIN_GROUP,
        SEARCH} from '../../src/actions/types';
import nock from 'nock';

describe('actions', () => {

  var mock;

  beforeEach(() => {

  });

  describe('createUser', () => {

    it('has the correct type', () => {
      const action = actions.createUser(null, () => {} , () => {});
      expect(action.type).to.equal(CREATE_USER);
    });

    it('has the correct payload', () => {
      var user = {
        id: 1,
        email: 'mohamedwaleed2012@gmail.com',
        firstName: "mohamed",
        lastName: "waleed",
        gender: "male",
        group : "1"
      };
      const action = actions.createUser(user, () => {} , () => {});
      expect(action.payload).to.be.a('Promise');
    });
  });


  describe('getAllUsers', () => {

    it('has the correct type', () => {
      const action = actions.getAllUsers();
      expect(action.type).to.equal(GET_USERS);
    });

    it('has the correct payload', () => {
      const action = actions.getAllUsers();
      expect(action.payload).to.be.a('Promise');
    });
  });

  describe('getUsersCount', () => {

    it('has the correct type', () => {
      const action = actions.getUsersCount();
      expect(action.type).to.equal(GET_USERS_COUNT);
    });

    it('has the correct payload', () => {
      const action = actions.getUsersCount();
      expect(action.payload).to.be.a('Promise');
    });
  });


  describe('getUser', () => {

    it('has the correct type', () => {
      const action = actions.getUser();
      expect(action.type).to.equal(GET_USER);
    });

    it('has the correct payload', () => {
      const action = actions.getUser();
      expect(action.payload).to.be.a('Promise');
    });
  });

  describe('deleteUser', () => {

    it('has the correct type', () => {
      const action = actions.deleteUser();
      expect(action.type).to.equal(DELTET_USER);
    });

    it('has the correct payload', () => {
      const action = actions.deleteUser(1);
      expect(action.payload).to.equal(1);
    });
  });


  describe('createGroup', () => {

    it('has the correct type', () => {
      const action = actions.createGroup(null,  () => {} , () => {});
      expect(action.type).to.equal(CREATE_GROUP);
    });

    it('has the correct payload', () => {
      const action = actions.createGroup(null,  () => {} , () => {});
      expect(action.payload).to.be.a('Promise');
    });
  });

  describe('getAllGroups', () => {

    it('has the correct type', () => {
      const action = actions.getAllGroups();
      expect(action.type).to.equal(GET_GROUPS);
    });

    it('has the correct payload', () => {
      const action = actions.getAllGroups();
      expect(action.payload).to.be.a('Promise');
    });
  });

  describe('getGroupsCount', () => {

    it('has the correct type', () => {
      const action = actions.getGroupsCount();
      expect(action.type).to.equal(GET_GROUPS_COUNT);
    });

    it('has the correct payload', () => {
      const action = actions.getGroupsCount();
      expect(action.payload).to.be.a('Promise');
    });
  });


  describe('getAllCategories', () => {

    it('has the correct type', () => {
      const action = actions.getAllCategories();
      expect(action.type).to.equal(GET_CATEGORIES);
    });

    it('has the correct payload', () => {
      const action = actions.getAllCategories();
      expect(action.payload).to.be.a('Promise');
    });
  });

  describe('getGroup', () => {

    it('has the correct type', () => {
      const action = actions.getGroup();
      expect(action.type).to.equal(GET_GROUP);
    });

    it('has the correct payload', () => {
      const action = actions.getGroup();
      expect(action.payload).to.be.a('Promise');
    });
  });

  describe('deleteGroup', () => {

    it('has the correct type', () => {
      const action = actions.deleteGroup();
      expect(action.type).to.equal(DELTET_GROUP);
    });

    it('has the correct payload', () => {
      const action = actions.deleteGroup();
      expect(action.payload).to.be.a('Promise');
    });
  });

  describe('joinGroup', () => {

    it('has the correct type', () => {
      const action = actions.joinGroup(1, 1, () => {} , () => {});
      expect(action.type).to.equal(JOIN_GROUP);
    });

    it('has the correct payload', () => {
      const action = actions.joinGroup(1, 1, () => {} , () => {});
      expect(action.payload).to.be.a('object');
      expect(action.payload.groupId).to.equal(1);
      expect(action.payload.userId).to.equal(1);
    });
  });

  describe('disjoinGroup', () => {

    it('has the correct type', () => {
      const action = actions.disjoinGroup(1, 1, () => {} , () => {});
      expect(action.type).to.equal(DISJOIN_GROUP);
    });

    it('has the correct payload', () => {
      const action = actions.disjoinGroup(1, 1, () => {} , () => {});
      expect(action.payload).to.be.a('object');
      expect(action.payload.groupId).to.equal(1);
      expect(action.payload.userId).to.equal(1);
    });
  });

  describe('Search', () => {

    it('has the correct type', () => {
      const action = actions.search(null, () => {} , () => {});
      expect(action.type).to.equal(SEARCH);
    });

    it('has the correct payload', () => {
      const action = actions.search(null, () => {} , () => {});
      expect(action.payload).to.be.a('Promise');
    });
  });

});
