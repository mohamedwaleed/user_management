import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Navbar  from './dashboard-feature/navbar';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import { Alert } from 'react-bootstrap';

class CreateGroup extends Component {
  constructor(props) {
      super(props);
      this.state = {alertVisible: false};
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  renderCategories() {
    if(!this.props.categories){
      return;
    }
    return this.props.categories.map(category => {
      return (<option key={category.id} value={category.id}>{category.name}</option>);
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
  onSubmit(values) {
    var group = {
      name: values.name,
      categoryId: values.category
    };
    this.props.createGroup(group, (res) => {
      this.handleAlertShow("success","Success", `Group ${group.name} added successfully`);
    },(res) => {
      this.handleAlertShow("danger","Error !!", res.error.message);
    });
    values.name = '';
  }

  render() {
    var categories = this.renderCategories();
    const { handleSubmit } = this.props;
    return (
      <div className="create-group">
        <Navbar />
        <form id="createGroup" onSubmit={handleSubmit(this.onSubmit.bind(this))} className="create-group-form">
          {this.displayAlert()}
          <Field
            label="Name"
            name="name"
            type="text"
            component={this.renderField} />
          <Field
            label="Category"
            name="category"
            type="select"
            data={categories}
            component={this.renderField} />
          <button type="submit" className="btn btn-success create">Create</button>
        </form>
      </div>
    );

  }
  }

  function validate(values) {
    var errors = {};
    if(!values.name) {
      errors.name = 'Enter a group name';
    }
    if(values.name && values.name.length > 50) {
      errors.name = 'Group name must be less than 50 characters'
    }

    if(!values.category) {
      errors.category = 'Please select a category';
    }
    return errors;
  }


  function mapStateToProps(state) {
    return {
      categories: state.categories
    };
  }

export default reduxForm({
  validate,
  form: "createGroupForm"
})( connect(mapStateToProps, actions)(CreateGroup));
