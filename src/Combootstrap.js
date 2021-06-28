import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'

class Combootstrap extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => alert("Item Clicked!!!")}> Click Me</Button>

                <Container>
                    <Row>
                        <Col md={4}>md=4</Col>
                        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Combootstrap;