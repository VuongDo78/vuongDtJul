import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchDepartmentStaff, fetchDepartments } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Card, CardImg, CardTitle, CardBody
    , Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button, Label,
    Modal, ModalHeader, ModalBody, Col, Row, ButtonDropdown
} from 'reactstrap';
import { Loading } from "./Loading"

const mapStateToProps = state => {
    return {
        departmentStaffs: state.departmentStaffs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        fetchDepartmentStaff: (departmentsId) => dispatch(fetchDepartmentStaff(departmentsId))
    }
}
class DepartmentStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {

            departmentStaffs: props.departmentStaffs
        }
    }
    componentDidMount() {

        this.props.fetchDepartmentStaff(this.props.match.params.id);
    }
    render() {
        const RenderMenuItem = ({ departmentStaff }) => {
            return (

                <div >
                    <Link to={`/menu/${departmentStaff.id}`}>

                        <Card className="card">
                            <CardBody className="card-body">
                                <CardImg className="card-img-top" width="100%" src={departmentStaff.image} />

                                <CardTitle tag="h5" className="text-center mt-3">{departmentStaff.name}</CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                </div>


            );
        }

        const ListOfStaffs = ({ isLoading, errMessage, departmentStaffs }) => {
            if (isLoading) {
                return <Loading />
            } else if (errMessage) {
                return <div className="col-12"><h5>{errMessage}</h5></div>
            } else {
                return (
                    <div className="container">
                        <div className="row text-light mt-3">
                            <div className="btn-group">
                                <div className="btn btn-dark">
                                    <Link to='/departments'>Phòng ban</Link>
                                </div>
                                <div className="btn btn-dark">/</div>
                                <div className="btn btn-dark">{this.props.departmentName}</div>
                                <div className="btn btn-dark">/</div>
                                <div className="btn btn-dark">Nhân viên</div>
                            </div>
                        </div>
                        <div className="row">
                            {departmentStaffs.map((departmentstaff) => {
                                return <div className="col-sm-6 col-md-2 mt-5" key={departmentstaff.id}>

                                    <RenderMenuItem departmentStaff={departmentstaff}
                                    />

                                </div>
                            })}
                        </div>

                    </div>
                );
            }
        }
        return (
            <div>
                <div className="row">

                    <div className="col text-center mt-3">
                        <h2>Danh sách nhân viên</h2>

                        <hr />
                    </div>
                </div>
                <div className="row">
                    <ListOfStaffs
                        isLoading={this.props.departmentStaffs.isLoading}
                        departmentStaffs={this.props.departmentStaffs.departmentStaffs}
                        errMessage={this.props.departmentStaffs.errMessage}
                    />
                </div>

            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DepartmentStaff));