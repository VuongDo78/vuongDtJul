import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import StaffDetail from './StaffDetailComponent';
import StaffList from './StaffListComponent';
import { STAFFS } from './staffs';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Header from './header';
import Footer from './footer';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            selectedStaff: null
        };
    }

    onStaffSelect(staffId) {
        this.setState({ selectedStaff: staffId });
    }

    render() {
        return (
            <div>
                
                <Header/>

                <div className="container">
                    <StaffList staffs={this.state.staffs} />
                    <StaffDetail staffs={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[1]} />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Main;