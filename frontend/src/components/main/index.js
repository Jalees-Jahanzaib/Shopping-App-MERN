

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Container
} from 'reactstrap';

import { Component } from 'react'

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href='/home'> Shop Here</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://google.com"> Google</NavLink>

                                </NavItem>

                            </Nav>


                        </Collapse>


                    </Container>

                </Navbar>
            </div>
        )
    }
}


export default AppNavbar;