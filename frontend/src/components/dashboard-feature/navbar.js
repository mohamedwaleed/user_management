import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  * as actions from '../../actions';
import { Field, reduxForm } from 'redux-form';
import SearchWidget from '../search/search_widget';

class Navbar extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <Link className="navbar-brand" to="/">User managment</Link>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/groups">Groups</Link></li>
            </ul>
            <SearchWidget />
          </div>
        </div>
        </nav>
    );
  }
}

export default connect(null, actions)(Navbar);
