import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, NavDropdown, Nav, } from 'reactstrap';

class Header extends Component {
    render() {
        return (
           <div>
               
                <Navbar dark color="primary">
                   
                        <NavbarBrand href="/">Quản Lý Nhân Sự Ver 1.0</NavbarBrand>
                        <NavbarBrand href="/">Phòng Ban</NavbarBrand>
                        <NavbarBrand href="/">Bảng Lương</NavbarBrand>
                    
                </Navbar>
</div>
                
        );
    }
}

export default Header;
