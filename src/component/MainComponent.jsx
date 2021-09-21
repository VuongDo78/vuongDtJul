import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './homeComponent';
import Payroll from './PayrollComponent';
import StaffDetail from './StaffDetailComponent';
import Department from './DepartmentComponent'
import DepartmentStaff from './DepartmentStaff'
import Header from './header';
import Footer from './footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    fetchStaffs, staffAdd, fetchDepartments,
    fetchPayroll, staffUpdate, staffDelete
} from '../redux/actionCreators';



const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments,
        payrolls: state.payrolls,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        staffDelete: (id) => dispatch(staffDelete(id)),
        staffUpdate: (staff) => dispatch(staffUpdate(staff)),
        staffAdd: (staff) => dispatch(staffAdd(staff)),
        fetchStaffs: () => dispatch(fetchStaffs()),
        fetchDepartments: () => dispatch(fetchDepartments()),
        fetchPayroll: () => dispatch(fetchPayroll())

    }
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffs: props.staffs,
            departments: props.departments,
            payrolls: props.payrolls,
            classNameStaffList: "col-sm-6 col-md-4 mt-5",
        };
    }

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchPayroll();
    }

    onAddStaff = (staff) => {
        this.props.staffAdd(staff);
    }
    toUpdateStaff = (staff) => {
        this.props.staffUpdate(staff);
    }
    toDeleteStaff = (id) => {
        this.props.staffDelete(id);
    }
    render() {
        const HomePage = () => {
            return (
                <Home staffLoading={this.props.staffs.isLoading}
                    department={this.state.departments}
                    role={this.state.role}
                />
            );
        }

        const StaffWithId = ({ match, history }) => {
            const staff = this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.id, 10))[0]
            const department = staff && this.props.departments.departments.filter(x => x.id == staff.departmentId)[0]
            return (
                <StaffDetail staff={staff}
                    departmentName={department && department.name}
                    toUpdateStaff={(staff) => this.toUpdateStaff(staff)}
                    toDeleteStaff={(id) => this.toDeleteStaff(id)}
                    goToList={() => history.push('/stafflist')} />
            );
        }

        const StaffsOfDepartment = ({ match }) => {
            const department = this.props.departments.departments.filter(x => x.id === match.params.id)[0]
            return <DepartmentStaff departmentName={department && department.name} />
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/departments" component={() => <Department departments={this.props.departments} />} />
                    <Route exact path="/stafflist" component={() => <Menu staffs={this.props.staffs}
                        classNameStaffList={this.state.classNameStaffList} onAddStaff={(staff) => this.onAddStaff(staff)} />} />
                    {/* exact để ngăn đường dẫn chọn sai vì có 2 /menu */}
                    <Route path="/menu/:id" component={StaffWithId} />
                    <Route exact path="/departments/:id" component={StaffsOfDepartment} />
                    <Route exact path="/payroll" component={() => <Payroll payrolls={this.props.payrolls} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));