import { PropTypes } from 'prop-types';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LanguageSelector, { LanguageSelectorType } from '../LanguageSelector';
import TopNavbarItem from './TopNavbarItem';

const TopNavbarComponent = (props) => {
  const {
    linksLeft, linksRight, homeRoute, appName,
  } = props;
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink to={homeRoute}>
          <Navbar.Brand>{appName}</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {linksLeft.map((link) => (link && <TopNavbarItem key={link.id} route={link} />))}
          </Nav>
          <Nav className="ml-auto">
            <LanguageSelector type={LanguageSelectorType.Buttons} />
          </Nav>
          <Nav className="ml-auto">
            {linksRight.map((link) => (link && <TopNavbarItem key={link.id} route={link} />))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

TopNavbarComponent.propTypes = {
  linksLeft: PropTypes.arrayOf(PropTypes.object),
  linksRight: PropTypes.arrayOf(PropTypes.object),
  homeRoute: PropTypes.string.isRequired,
  appName: PropTypes.string.isRequired,
};

TopNavbarComponent.defaultProps = {
  linksLeft: [],
  linksRight: [],
};

export default TopNavbarComponent;
