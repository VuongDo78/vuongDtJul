import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

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
            selectedStaff: null,
            classNameStaffList: "col-sm-6 col-md-4 mt-5",
        };
    }

    onStaffSelect(staffId) {
        this.setState({ selectedStaff: staffId });
    }
    sixCol(classname) {
        this.setState({ classNameStaffList: classname })
    }
    render() {
        return (
            <div>

                <Header />
                <button className="btn btn-dark mt-3 ml-3"
                    onClick={() => { this.sixCol("col-sm-6 col-md-2 mt-5") }}
                >Hiển thị 6 cột
                </button>

                <button className="btn btn-warning mt-3 ml-3"
                    onClick={() => { this.sixCol("col-sm-6 col-md-4 mt-5") }}
                >Hiển thị 3 cột</button>
                
                <div className="container">
                    <StaffList staffs={this.state.staffs} classNameStaffList={this.state.classNameStaffList} />
                    <StaffDetail staffs={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
