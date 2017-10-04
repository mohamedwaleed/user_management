import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Navbar  from './dashboard-feature/navbar';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import _ from 'lodash';
import { Alert } from 'react-bootstrap';

class ManageJoins extends Component {
  constructor(props) {
      super(props);
      this.state = {alertVisible: false};
  }

  componentDidMount() {
    this.props.getAllGroups();
    this.props.getAllUsers();
  }

  renderGroups() {
    if(!this.props.groups){
      return;
    }
    return _.map(this.props.groups, (group) => {
      return (<option key={group.id} value={group.id}>{group.name}</option>);
    });
  }

  renderUsers() {
    if(!this.props.users){
      return;
    }
    return _.map(this.props.users, (user) => {
      return (<option key={user.id} value={user.id}>{user.email}</option>);
    });
  }

  renderField(field) {

    const {meta} = field;
    const className = `form-group ${(meta.touched && meta.error) ? 'has-danger' : ''}`;
    var inputClass = `form-control ${field.input.name}`;
    if(field.type === 'select') {

      return (
        <div className={className}>
          <label >{field.label}</label>
          <select className={inputClass} name="groups" {...field.input}>
            <option key="0"></option>
            {field.data}
          </select>
          <div className="text-danger">
            {meta.touched?meta.error:""}
          </div>
        </div>
      );
    }else {

      return (
        <div className={className}>
          <label>{field.label}</label>
          <input type={field.type} className={inputClass}  placeholder={field.label}  {...field.input}/>
          <div className="text-danger">
            {meta.touched?meta.error:""}
          </div>
        </div>
      );
    }
  }


  onJoinSubmit(values) {
    this.props.joinGroup(values.user, values.group, () => {

      this.handleAlertShow("success","Success", `User ${this.props.users[values.user].email} joined group ${this.props.groups[values.group].name}`);

    }, (res) => {
      console.log(res);
      this.handleAlertShow("danger","Error !!", res.error.message);
    });
  }

  onDisjoinSubmit(values) {
    this.props.disjoinGroup(values.user, values.group, () => {
      this.handleAlertShow("success","Success", `User ${this.props.users[values.user].email} left group ${this.props.groups[values.group].name}`);
    }, (res) => {
      this.handleAlertShow("danger","Error !!", res.error.message);
    });
  }
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow(type, header, message) {
    this.setState({alertVisible: true, messageType: type, mesageHeader: header,message: message});
  }
  displayAlert() {
    if(this.state.alertVisible) {
      return (<Alert bsStyle={this.state.messageType} onDismiss={this.handleAlertDismiss.bind(this)}>
          <h4>{this.state.mesageHeader}</h4>
          <p>{this.state.message}</p>
        </Alert>);
    }
  }

  render() {
    var groups = this.renderGroups();
    var users = this.renderUsers();
    const { handleSubmit } = this.props;
    return (
      <div className="join-group">
        <Navbar />

        <form id="joinGroup"  className="join-group-form">
          {this.displayAlert()}
          <Field
            label="User"
            name="user"
            type="select"
            data={users}
            component={this.renderField} />
          <Field
            label="Group"
            name="group"
            type="select"
            data={groups}
            component={this.renderField} />
          <button type="submit" onClick={handleSubmit(this.onJoinSubmit.bind(this))} className="btn btn-success join">Join</button>
          <button type="submit" onClick={handleSubmit(this.onDisjoinSubmit.bind(this))} className="btn btn-primary disjoin">Disjoin</button>
        </form>
      </div>
    );

  }
}

function validate(values) {
  var errors = {};

  if(!values.user || values.user === "") {
    errors.user = "Please select a user";
  }
  if(!values.group || values.group === "") {
    errors.group = "please select a group";
  }
  return errors;
}



function mapStateToProps(state) {
  return {
    groups: state.groups,
    users: state.users
  };
}

export default reduxForm({
  validate,
  form: "joinGroupForm"
})( connect(mapStateToProps, actions)(ManageJoins));
