import React, { Component } from 'react';
import { Button,Modal, ModalFooter } from 'react-bootstrap';

class Combootstrapmodal extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({show: !this.state.show})
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.handleModal()}>Click Me</Button>
                <Modal show={this.state.show} onHide={() => this.handleModal()}> 
                  <Modal.Header closeButton> 
                      Modal Heading
                  </Modal.Header>
                  <Modal.Body> 
                      Hello Body 
                  </Modal.Body>
                  <Modal.Footer> 
                <Button onClick={() => this.handleModal()}> Close</Button>
                <Button onClick={() => this.handleModal()}> Save</Button>
                  </Modal.Footer>
               
                </Modal>
            </div>
        );
    }
}

export default Combootstrapmodal;