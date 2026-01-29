import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler
} from 'reactstrap';
import Link from './link'
import Navigation from 'reactstrap-json-nav'
import navigation from '../data/navigation';
import logo from '../assets/images/logo.svg'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="py-3">
      <Container className="d-flex align-items-center">
        <Link to="/" className="navbar-brand mb-0">
          <img src={logo} alt="TeckAid" height="25px"/>
        </Link>
        <NavbarToggler onClick={toggle} className="ms-auto" />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Navigation json={navigation} link={Link}/>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
