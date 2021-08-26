import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import StaffDetail from './StaffDetailComponent';
import StaffList from './StaffListComponent';
import { STAFFS } from './staffs';
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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ứng Dụng Quản Lý Nhân Sự V1.0</NavbarBrand>
                    </div>
                </Navbar>

                <div className="container">
                    <StaffList staffs={this.state.staffs} onClick={(staffId) => this.onStaffSelect(staffId)} />
                    <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]} />
                </div>
            </div>
        );
    }
}

export default Main;
