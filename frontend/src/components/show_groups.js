import React , { Component } from 'react';
import Navbar  from './dashboard-feature/navbar';
import { connect } from 'react-redux';
import  * as actions from '../actions';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-js-pagination';
import _ from 'lodash';
import PopupButton from './popup_button';
import { Button , Modal, Popover,  Tooltip, OverlayTrigger} from 'react-bootstrap';

class ShowGroups extends Component {
  constructor(props) {
      super(props);
      this.elementsPerPage = 5;
      this.pageStartoffset = 0;
      this.state =  { showMessage: false };
  }

  componentDidMount() {
    this.props.getGroupsCount();
    this.props.getAllGroups(this.pageStartoffset, this.elementsPerPage);
  }


  deleteGroup(groupId) {
    this.props.deleteGroup(groupId, () => {
      this.pageStartoffset = 0;
      this.props.getGroupsCount();
      this.props.getAllGroups(this.pageStartoffset, this.elementsPerPage);
    }, (res) => {
      this.showMessage(res.error.message);
    });
  }

  renderPopupContent() {
    return (<h3>Do you want to delete this group ?</h3>);
  }

  renderGroups() {
    var index = 1;
    return _.map(this.props.groups, (group) => {
        var groupLink = `/group/${group.id}`;
        return (
          <tr key={group.id}>
            <th scope="row">{index ++}</th>
            <td><Link to={groupLink}>{group.name}</Link></td>
            <td>{group.category}</td>
            <td><PopupButton okCallback={this.deleteGroup.bind(this)} data={group.id} content={this.renderPopupContent.bind(this)}/></td>
          </tr>
        );
    });
  }
  handlePageChange = (data) => {
    this.pageStartoffset = data.selected *  this.elementsPerPage;
    this.props.getAllGroups(this.pageStartoffset, this.elementsPerPage);
  }

  renderPaginatorController() {
    if(!this.props.totalGroupsCount || this.props.totalGroupsCount <= this.elementsPerPage) {
      return ;
    }
    var pageCount = Math.ceil(this.props.totalGroupsCount / this.elementsPerPage);
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

  closeMessage() {
    this.setState({ showMessage: false });
  }

  showMessage(errorMessage) {
    this.setState({ showMessage: true , errorMessage: errorMessage});
  }

  renderMessage() {

    if(this.state.showMessage) {
      return (<Modal show={this.state.showMessage} onHide={this.closeMessage.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{'color':'red'}}>
          {this.state.errorMessage}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeMessage.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>);
    }
  }

  render() {

    return (
      <div className="show_groups">
        <Navbar />
        {this.renderMessage()}
        <div className="groups">
          <table className="table table-hover table-responsive">
            <thead >
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {this.renderGroups()}
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
    groups: state.groups,
    totalGroupsCount: state.totalGroupsCount
  };
}

export default connect(mapStateToProps, actions)(ShowGroups);
