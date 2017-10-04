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
    SEARCH} from './types';
import { BASE_URL } from './constants';
import axios from 'axios';

export function createUser(user, onSuccess, onFail) {
    var requestUrl = `${BASE_URL}/users/`;
    var request = axios.post(requestUrl, user);
    request.then((res) => onSuccess(res)).catch((err) => (err.response)?onFail(err.response.data):{});
    return {
        type: CREATE_USER,
        payload: request
    };
}

export function getAllUsers(offset, limit) {
  var requestUrl = `${BASE_URL}/users?offset=${offset}&limit=${limit}`;
  var request = axios.get(requestUrl);
  request.catch(() => {});
  return {
    type: GET_USERS,
    payload: request
  };
}

export function getUsersCount() {
  var requestUrl = `${BASE_URL}/users/count`;
  var request = axios.get(requestUrl);
  request.catch(() => {});
  return {
    type: GET_USERS_COUNT,
    payload: request
  };
}

export function getUser(userId) {
  var requestUrl = `${BASE_URL}/users/${userId}`;
  var request = axios.get(requestUrl);
  request.catch(() => {});
  return {
    type: GET_USER,
    payload: request
  };
}

export function deleteUser(userId, callback) {
  var requestUrl = `${BASE_URL}/users/${userId}`;
  var request = axios.delete(requestUrl).then(() => callback());
  request.catch(() => {});
  return {
    type: DELTET_USER,
    payload: userId
  };
}

export function createGroup(group, onSuccess, onFail) {
   var requestUrl = `${BASE_URL}/groups/`;
   var request = axios.post(requestUrl, group);
   request.then((res) => onSuccess(res)).catch((err) => (err.response)?onFail(err.response.data):{});
   return {
     type: CREATE_GROUP,
     payload: request
   };
}

export function getAllGroups(offset, limit) {
  var requestUrl = `${BASE_URL}/groups?offset=${offset}&limit=${limit}`;
  var request = axios.get(requestUrl);
  request.catch(() => {});
  return {
    type: GET_GROUPS,
    payload: request
  };
}
export function getGroupsCount() {
  var requestUrl = `${BASE_URL}/groups/count`;
  var request = axios.get(requestUrl);
  request.catch(() => {});
  return {
    type: GET_GROUPS_COUNT,
    payload: request
  };
}

export function getAllCategories() {
  var requestUrl = `${BASE_URL}/categories/`;
  var request = axios.get(requestUrl);
  request.catch(() => {});
  return {
    type: GET_CATEGORIES,
    payload: request
  };
}

export function getGroup(groupId) {
  var requestUrl = `${BASE_URL}/groups/${groupId}`;
  var request = axios.get(requestUrl);
  request.catch(() => {});
  return {
    type: GET_GROUP,
    payload: request
  };
}

export function deleteGroup(groupId, onSuccess, onFail) {
  var requestUrl = `${BASE_URL}/groups/${groupId}`;
  var request = axios.delete(requestUrl).then((res) => onSuccess(res)).catch((err) => (err.response)?onFail(err.response.data):{});
  return {
    type: DELTET_GROUP,
    payload: request
  };
}

export function joinGroup(userId, groupId, onSuccess, onFail) {
  var requestUrl = `${BASE_URL}/users/${userId}/group/${groupId}`;
  axios.post(requestUrl).then((res) => onSuccess(res)).catch((err) => (err.response)?onFail(err.response.data):{});
  return {
    type: JOIN_GROUP,
    payload: {
      groupId: groupId,
      userId: userId
    }
  };
}

export function disjoinGroup(userId, groupId, onSuccess, onFail) {
  var requestUrl = `${BASE_URL}/users/${userId}/group/${groupId}`;
  axios.delete(requestUrl).then((res) => onSuccess(res)).catch((err) => (err.response)?onFail(err.response.data):{});
  return {
    type: DISJOIN_GROUP,
    payload: {
      groupId: groupId,
      userId: userId
    }
  };
}

export function search(query, onSuccess, onFail) {
  var requestUrl = `${BASE_URL}/search`;
  var request = axios.post(requestUrl, query);
  request.then((res) => onSuccess(res)).catch((err) => (err.response)?onFail(err.response.data):{});
  return {
    type: SEARCH,
    payload: request
  };
}
