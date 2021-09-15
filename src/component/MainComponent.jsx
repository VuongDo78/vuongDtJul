import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './homeComponent';
import Payroll from './PayrollComponent';
import StaffDetail from './StaffDetailComponent';
import { DEPARTMENTS, ROLE, STAFFS } from './staffs';
import Department from './DepartmentComponent'
import Header from './header';
import Footer from './footer';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,
            role: ROLE,
            classNameStaffList:"col-sm-6 col-md-4 mt-5",
        };
    }

    onAddStaff = (staffs) => {
        this.setState({staffs: staffs});
    }
    
    render() {
        const HomePage = () => {
            return (
                <Home staff = {this.state.staffs}
                    department = {this.state.departments}
                    role = {this.state.role}
                />
            );
        }

        const StaffWithId = ({match}) => {
            return (
                <StaffDetail staff = {this.state.staffs.filter((staff)=> staff.id === parseInt(match.params.id,10))[0]}/>
            );
        }

        return (
            <div>
                <Header />
                
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/departments" component={() => <Department department = {this.state.departments}/>}/>
                    <Route exact path="/stafflist" component={() => <Menu staffs = {this.state.staffs}
                    classNameStaffList ={this.state.classNameStaffList} onAddStaff={(staffs) => this.onAddStaff(staffs)}/>}/>
                    {/* exact để ngăn đường dẫn chọn sai vì có 2 /menu */}
                    <Route path = "/menu/:id" component = {StaffWithId}/>
                    <Route exact path="/payroll" component={() => <Payroll payroll = {this.state.staffs}/>}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;