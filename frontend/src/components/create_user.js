import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Navbar  from './dashboard-feature/navbar';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import _ from 'lodash';
import { Alert } from 'react-bootstrap';

class CreateUser extends Component {
  constructor(props) {
      super(props);
      this.state = {alertVisible: false};
  }

  componentDidMount() {
    this.props.getAllGroups();
  }

  renderGroups() {
    if(!this.props.groups){
      return;
    }
    return _.map(this.props.groups, (group) => {
      return (<option key={group.id} value={group.id}>{group.name}</option>);
    });
  }
  renderGenders() {

    var male = (<option key="male" value="male">male</option>) ;
    var female = (<option key="female" value="female">female</option>);
    return [male, female];
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


  onSubmit(values) {
    var user = {
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      gender: values.gender,
      groupId: values.group
    };
    this.props.createUser(user, (res) => {
      this.handleAlertShow("success","Success", `User ${user.email} added successfully`);
    }, (res) => {
      this.handleAlertShow("danger","Error !!", res.error.message);
    });
    values.email = '';
    values.firstname = '';
    values.lastname = '';
    values.gender = '';
  }

  displayAlert() {
    if(this.state.alertVisible) {
      return (<Alert bsStyle={this.state.messageType} onDismiss={this.handleAlertDismiss.bind(this)}>
          <h4>{this.state.mesageHeader}</h4>
          <p>{this.state.message}</p>
        </Alert>);
    }
  }
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow(type, header, message) {
    this.setState({alertVisible: true, messageType: type, mesageHeader: header,message: message});
  }

  render() {
    var groups = this.renderGroups();
    var genders = this.renderGenders();
    const { handleSubmit } = this.props;
    return (
      <div className="create-user">
        <Navbar />
        <form id="createUser" onSubmit={handleSubmit(this.onSubmit.bind(this))} className="create-user-form">
          {this.displayAlert()}
          <Field
            label="Email"
            name="email"
            type="text"
            component={this.renderField} />
          <Field
            label="First name"
            name="firstname"
            type="text"
            component={this.renderField} />
          <Field
            label="Last Name"
            name="lastname"
            type="text"
            component={this.renderField} />
          <Field
            label="Gender"
            name="gender"
            type="select"
            data={genders}
            component={this.renderField} />
          <Field
            label="Group"
            name="group"
            type="select"
            data={groups}
            component={this.renderField} />
          <button type="submit" className="btn btn-success create">Create</button>
        </form>
      </div>
    );

  }
}

function validate(values) {
  function validateEmail(email) {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
  }
  var errors = {};

  if(!values.email) {
    errors.email =  "Enter email";
  }
  if(!validateEmail(values.email)) {
    errors.email = "Please enter a valid email address";
  }
  if(!values.firstname) {
    errors.firstname =  "Enter first name";
  }
  if(values.firstname && values.firstname.length > 50) {
    errors.firstname =  "First name must be less than 50";
  }
  if(!values.lastname) {
    errors.lastname =  "Enter last name";
  }
  if(values.lastname && values.lastname.length > 50) {
    errors.lastname =  "Last name must be less than 50";
  }
  if(!values.gender) {
    errors.age = "Enter gender";
  }
  if(values.gender !== 'male' && values.gender !== 'female' ) {
    errors.gender = "gender must be a male, female";
  }

  if(!values.group || values.group === "") {
    errors.group = "please select a group";
  }
  return errors;
}



function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}

export default reduxForm({
  validate,
  form: "createUserForm"
})( connect(mapStateToProps, actions)(CreateUser));
