import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

const Heading = () => {
  return (
    <Navbar color="dark" dark>
        <Container>
            <NavbarBrand href='/'>Fairfield CC</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className="btn btn-primary" to="/add"> Add Player</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Heading
