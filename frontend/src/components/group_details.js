import React , { Component } from 'react';
import Navbar  from './dashboard-feature/navbar';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import { Link } from 'react-router-dom';

class GroupDetails extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getGroup(id);
  }

  renderUsers() {
      if(!this.props.group.users) {
        return;
      }
      return this.props.group.users.map((user, index) => {
         var userLink = `/user/${user.id}`;
         if(index){
           return (
               <span key={index}>, <Link to={userLink}>{user.email}</Link></span>
           );
         }else {
           return (
               <span key={index}><Link to={userLink}>{user.email}</Link></span>
           );
         }
      });
  }

  render() {
    if(!this.props.group) {
      return (<div>Loading</div>);
    }
    return (
      <div className="group_details">
        <Navbar />
        <div className="groupUserDetailsSection container">
        <div className="row">

          <div className="col-sm-12" >
            <table className="table borderless table-responsive">
              <tbody>
              <tr >
                <th scope="row">Name</th>
                <td>{this.props.group.name}</td>
              </tr>
              <tr >
                <th scope="row">Category</th>
                <td>{this.props.group.category}</td>
              </tr>
              <tr >
                <th scope="row">Users</th>
                <td className="break-words">
                    {this.renderUsers()}

                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>

      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    group: state.groups[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, actions)(GroupDetails);
