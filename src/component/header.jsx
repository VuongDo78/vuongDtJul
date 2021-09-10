import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, NavDropdown, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNav: false
        };
        this.togglerNav = this.togglerNav.bind(this);
    }
    togglerNav() {
        this.setState({
            openNav: !this.state.openNav
        });
    };
    render() {
        return (
            <React.Fragment>
                <Navbar  expand="md" className="sticky-top bg-dark">
                    <div className="container">
                        <NavbarToggler className="fa fa-bars fa-lg" onClick={this.togglerNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img className="img-fluid " src='/asset/images/logo.png'
                                height='41' width='30' alt='Logo' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.openNav} navbar>
                            <Nav navbar >
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/stafflist">
                                        <span className="fa fa-users fa-lg mf-2"></span> Nhân Viên
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/departments">
                                        <span className="fa fa-address-card fa-lg"></span> Phòng Ban
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/payroll">
                                        <span className="fa fa-money fa-lg"></span> Tiền Lương
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>

        );
    }
}

export default Header;