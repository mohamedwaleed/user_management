import React , { Component } from 'react';
import { Button , Modal, Popover,  Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class PopupButton extends Component {
  constructor(props) {
    super(props);
    this.state =  { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  ok() {
    this.props.okCallback(this.props.data);
    this.close();
  }

  render() {

    return (
      <div className="popup-button">
        <Button
          bsStyle="danger"
          bsSize="small"
          onClick={this.open.bind(this)}
        >Delete</Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Warning !!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.content()}
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.ok.bind(this)}>Ok</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
