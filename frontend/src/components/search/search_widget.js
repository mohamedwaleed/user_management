import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  * as actions from '../../actions';
import { Field, reduxForm } from 'redux-form';
import SearchService from '../../services/search_service';
import { Route , withRouter} from 'react-router-dom';

class SearchWidget extends Component {
  constructor(props) {
      super(props);
      this.searchService = new SearchService();
  }

  renderField(field) {
    const {meta} = field;
    const className = `form-group ${(meta.touched && meta.error) ? 'has-danger' : ''}`;
    var inputClass = `form-control ${field.input.name}`;
      return (
        <div className={className}>
          <input type={field.type} className={inputClass}  placeholder={field.label}  {...field.input}/>
          <div className='text-danger'>
            {meta.touched?meta.error:""}
          </div>
        </div>
      );
  }

  search(values) {
    var searchQuery = values.searchQuery;
    try{
      //group:[id=1 and name=group1] , user: [id=2]
      var query = this.searchService.parse(searchQuery);
      this.props.search(query, () => {

      }, () => {

      });
    }catch(ex){
      this.props.search({searchTerm: searchQuery}, () => {

      }, () => {

      });
    }
    this.props.history.push(`/search`);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
            <form onSubmit={handleSubmit(this.search.bind(this))} className="navbar-form navbar-right">
              <Field
                label="Enter search query"
                name="searchQuery"
                type="text"
                component={this.renderField} />
              <button type="submit" className="btn btn-default">Search</button>
            </form>
    );
  }
}


function validate(values) {
  var errors = {};
  return errors;
}



export default reduxForm({
  validate,
  form: "searchForm"
})( withRouter(connect(null, actions)(SearchWidget)));
