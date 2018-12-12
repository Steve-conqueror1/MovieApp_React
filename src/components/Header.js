import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

const Header = props => {
  const { branding } = props;
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">{branding}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Search
          </NavItem>
          <NavItem eventKey={2} href="#">
            My Movies
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Jon Doe
          </NavItem>
          <NavItem eventKey={2} href="#">
            Profile
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.defaultProps = {
  branding: 'Movie App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
