import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import GroupsReducer from './reducer_groups';
import UsersReducer from './reducer_users';
import CategoriesReducer from './reducer_categories';
import GroupsCountReducer from './reducer_groups_count';
import UsersCountReducer from './reducer_users_count';
import SearchReducer from './reducer_search';

const rootReducer = combineReducers({
  form: formReducer,
  groups: GroupsReducer,
  users: UsersReducer,
  categories: CategoriesReducer,
  totalGroupsCount: GroupsCountReducer,
  totalUsersCount: UsersCountReducer,
  searchResult: SearchReducer
});

export default rootReducer;
