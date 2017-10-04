import React , { Component } from 'react';
import Navbar  from './dashboard-feature/navbar';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import { Link } from 'react-router-dom';

class UserDetails extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getUser(id);
  }

  renderGroups() {
      if(!this.props.user.groups) {
        return;
      }
      return this.props.user.groups.map((group, index) => {
         var groupLink = `/group/${group.id}`;
         if(index){
           return (
               <span key={index}>, <Link to={groupLink}>{group.name}</Link></span>
           );
         }else {
           return (
               <span key={index}><Link to={groupLink}>{group.name}</Link></span>
           );
         }
      });
  }

  render() {
    if(!this.props.user) {
      return (<div>Loading</div>);
    }
    return (
      <div className="user_details">
        <Navbar />
        <div className="userDetailsSection container">
        <div className="row">
          <div className="col-sm-4" >
            <div className="row" >
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <div className="text-center">
                  <img width="200" height="200" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15edea07151%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15edea07151%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.1796875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="rounded float-left" alt="..." />
                </div>
              </div>
              <div className="col-sm-4"></div>

            </div>
            <br/>
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <h3>{this.props.user.firstName} {this.props.user.lastName} </h3>
              </div>
              <div className="col-sm-4"></div>

            </div>
          </div>
          <div className="col-sm-8" style={{'float': 'left'}}>
            <table className="table borderless table-responsive">
              <tbody>
              <tr >
                <th scope="row">Email</th>
                <td>{this.props.user.email}</td>
              </tr>
              <tr >
                <th scope="row">First name</th>
                <td>{this.props.user.firstName}</td>
              </tr>
              <tr >
                <th scope="row">Last name</th>
                <td>{this.props.user.lastName}</td>
              </tr>
              <tr >
                <th scope="row">Gender</th>
                <td>{this.props.user.gender}</td>
              </tr>
              <tr >
                <th scope="row">Groups</th>
                <td className="break-words">
                    {this.renderGroups()}

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
    user: state.users[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, actions)(UserDetails);
