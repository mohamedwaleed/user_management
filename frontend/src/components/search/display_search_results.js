import React , { Component } from 'react';
import Navbar  from '../dashboard-feature/navbar';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResuls extends Component {
  constructor(props) {
      super(props);

  }

  renderSearchTitle(key) {
    if(key === 'user') {
      return "Users";
    }else if(key === 'group') {
        return "Groups";
    }else if(key === 'category') {
      return "Categories";
    }
    return "result";
  }

  renderSearchData(key, data) {
    if(key === 'user') {
      return data.map((element) => {
          var to = `user/${element.id}`;
          return (<li key={element.id}><Link to={to}>{element.email} </Link></li>);
      });
    }else if(key === 'group') {
      return data.map((element) => {
        var to = `group/${element.id}`;
        return (<li key={element.id}><Link to={to}>{element.name}</Link></li>);
      });
    }
    return data.map((element, index) => {
        return (<li key={index}>{element.name}</li>);
    });
  }

  renderSearchResult() {
    var keys = Object.keys(this.props.searchResult);
    var isEmpty = true;
    for(var i = 0 ; i < keys.length ; i ++ ) {
      isEmpty &= (this.props.searchResult[keys[i]].length === 0);
    }
    if(isEmpty) {
      return (<h2>No results</h2>);
    }
    return keys.map((key) => {
      if(!this.props.searchResult[key] || this.props.searchResult[key].length === 0){
        return ;
      }
      return <div className="row" key={key}>
        <div className="col-sm-12">
          <h1> {this.renderSearchTitle(key)} </h1>
          <ul>
            {this.renderSearchData(key, this.props.searchResult[key])}
          </ul>
        </div>
      </div>
    });
  }

  render() {
    return (
      <div className="search_result">
        <Navbar />
        <div className="search_result">
          <div className="container">
            {this.renderSearchResult()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult
  };
}

export default connect(mapStateToProps)(SearchResuls);
