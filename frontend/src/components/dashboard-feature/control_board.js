import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class ControlBoard extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="control-board">
        <span className="btn-section">
         <Link className="btn btn-success" to="/create-user"> Create user</Link>
        </span>
        <span className="btn-section">
          <Link className="btn btn-success" to="/create-group">Create group</Link>
        </span>
        <span className="btn-section">
          <Link className="btn btn-success" to="/manage-joins">Manage joins</Link>
        </span>
      </div>
    );
  }
}

export default ControlBoard;
