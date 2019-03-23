import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



export default class NavBar extends React.Component  {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div class="container">
      <div class="row">
          <Navbar color="dark" fixed="top" dark expand="md" scrolling dark>
          <div class="col">
          <NavbarBrand href="/" style={{fontSize : "45px", fontstyle : "italic"}}>Booksplorer</NavbarBrand>
          </div>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto">
          
          <NavItem>
          <NavbarBrand href="/aboutus" style={{fontSize : "25px"}}>About Us</NavbarBrand>
          <NavbarBrand href="/viewbook" style={{fontSize : "25px"}}>ViewBook</NavbarBrand>
          
          <NavbarBrand href="/reachout" style={{fontSize : "25px"}}>Reach Out!</NavbarBrand>
          <NavbarBrand href="/login" style={{fontSize : "25px"}}>Login</NavbarBrand>
          
          </NavItem>
          
          </Nav>    
          </Collapse>
         
          </Navbar>
          
        </div>
    </div>
    );
  }
}