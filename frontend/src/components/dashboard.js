import React , { Component } from 'react';
import Navbar  from './dashboard-feature/navbar';
import ControlBoard  from './dashboard-feature/control_board';
import ReactDOM from 'react-dom';

class Dashboard extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="dashboard">
        <Navbar />
        <ControlBoard />
      </div>
    );
  }
}

export default Dashboard;
