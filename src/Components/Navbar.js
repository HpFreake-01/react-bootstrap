import React, { useState} from "react";
import {Navbar, Nav, Button, Container, Modal, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        &:hover {
            color:white;
        }
    } 
`


const Navibar =()=>{

    const [ show, setShow ] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return(
        <div>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>WebFreiHeit Blog</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='mr-auto'>
                                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant="primary" className="mr-2 mt-1" onClick={handleShow}>Log in</Button>
                                <Button variant="primary" className="mr-2 mt-1" onClick={handleShow}>Sign out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Modal show={show} onHIde={handleClose}>
                <Modal.Header>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button style={{float: 'right'}} variant="secondary" onClick={handleClose}>Close</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Navibar;