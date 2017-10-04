import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import Dashboard from './components/dashboard';
import CreateUser from './components/create_user';
import CreateGroup from './components/create_group';
import ShowUsers from './components/show_users';
import ShowGroups from './components/show_groups';
import UserDetails from './components/user_details';
import GroupDetails from './components/group_details';
import ManageJoins from './components/manage_joins';
import SearchResults from './components/search/display_search_results';

import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/create-user" component={CreateUser} />
          <Route path="/create-group" component={CreateGroup} />
          <Route path="/manage-joins" component={ManageJoins} />
          <Route path="/search" component={SearchResults} />
          <Route path="/users" component={ShowUsers} />
          <Route path="/groups" component={ShowGroups} />
          <Route path="/user/:id" component={UserDetails} />
          <Route path="/group/:id" component={GroupDetails} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
