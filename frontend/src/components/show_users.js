import React , { Component } from 'react';
import Navbar  from './dashboard-feature/navbar';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-js-pagination';
import _ from 'lodash';
import PopupButton from './popup_button';


class ShowUsers extends Component {
  constructor(props) {
      super(props);
      this.elementsPerPage = 5;
      this.pageStartoffset = 0;
      this.state = {showModal: false};
  }

  componentDidMount() {
    this.props.getUsersCount();
    this.props.getAllUsers(this.pageStartoffset, this.elementsPerPage);
  }

  deleteUser(userId) {
    this.props.deleteUser(userId, () => {
      this.pageStartoffset = 0;
      this.props.getUsersCount();
      this.props.getAllUsers(this.pageStartoffset, this.elementsPerPage);
    });

  }
  renderPopupContent() {
    return (<h3>Do you want to delete this user ? </h3>);
  }

  renderUsers() {
    var index = 1;
    return _.map(this.props.users,(user) => {
        var userDetailsUrl = `/user/${user.id}`;
        return (
          <tr key={user.id}>
            <th scope="row">{index ++}</th>
            <td><Link to={userDetailsUrl}>{user.email}</Link></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td><PopupButton okCallback={this.deleteUser.bind(this)} data={user.id} content={this.renderPopupContent.bind(this)}/></td>
          </tr>
        );
    });
  }
  handlePageChange = (data) => {
    this.pageStartoffset = data.selected *  this.elementsPerPage;
    this.props.getAllUsers(this.pageStartoffset, this.elementsPerPage);
  }

  renderPaginatorController() {
    if(!this.props.totalUsersCount || this.props.totalUsersCount <= this.elementsPerPage) {
      return ;
    }
    var pageCount = Math.ceil(this.props.totalUsersCount / this.elementsPerPage);
    return (
      <div className="paginator-area">
        <ReactPaginate  previousLabel={"<"}
                     nextLabel={">"}
                     breakLabel={<a href="">...</a>}
                     breakClassName={"break-me"}
                     pageCount={pageCount}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={this.handlePageChange}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"activePagination"}
                     disabledClassName={"arrowsPaginationDisabled"} />

      </div>
    );
  }

  render() {

    return (
      <div className="show_users">
        <Navbar />
        <div className="users">
          <table className="table table-hover table-responsive">
            <thead >
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Gender</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {this.renderUsers()}
            </tbody>
          </table>
          {this.renderPaginatorController()}

        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    users: state.users,
    totalUsersCount: state.totalUsersCount
  };
}

export default connect(mapStateToProps, actions)(ShowUsers);
