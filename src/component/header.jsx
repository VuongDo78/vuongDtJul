import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, NavDropdown, Nav, } from 'reactstrap';

class Header extends Component {
    render() {
        return (
           <div>
                <Nav bsStyle="tabs"  dark>
                    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                </Nav>
                <Navbar bsStyle="tabs" dark color="primary">
                   
                        <NavbarBrand href="/">Nhân Viên</NavbarBrand>
                        <NavbarBrand href="/">Phòng Ban</NavbarBrand>
                        <NavbarBrand href="/">Bảng Lương</NavbarBrand>
                    
                </Navbar>
</div>
                
        );
    }
}

export default Header;