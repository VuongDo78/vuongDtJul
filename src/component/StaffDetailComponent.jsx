import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, CardBody
    , Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button, Label,
    Modal, ModalHeader, ModalBody, Col, Row, ButtonDropdown
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

function RenderStaff({ staff, departmentName }) {

    if (staff != null) {
        return (
            <div className="container">
                <div className="row mb-5">
                    <div className="col-sm-4 col-md-3 ">
                        <img width="100%" height="280px" src={staff.image} alt={staff.name} />
                    </div>
                    <div className="col-sm-8 col-md-9  text-warning bg-dark rounded">
                        <h5 className="mt-2 text-light">Họ và Tên: {staff.name}</h5>
                        <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy h:MM TT")}</p>
                        <p>Hệ số lương: {staff.salaryScale}</p>
                        <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy h:MM TT")}</p>
                        <p>Bộ phận: {departmentName}</p>
                        <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                        <p>Số ngày làm thêm: {staff.overTime}</p>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

class StaffDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classNameStaffList: 'col-sm-6 col-md-2 mt-5',
            dropdownOpen: false,
            isModalOpen: false,

        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteStaff = this.deleteStaff.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    handleSubmit(values) {
        const newInfo = {
            id: this.props.staff.id,
            name: values.name,
            doB: values.dob,
            salaryScale: values.salaryScale,
            startDate: values.startDate,
            departmentId: values.department,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            image: '/asset/images/alberto.png',
        };
        alert("Sửa Thông Tin  " + newInfo.name + " thành công!");
        this.props.toUpdateStaff(newInfo)
    }
    deleteStaff() {
        if (window.confirm('Bạn có muốn xóa nhân viên' + this.props.staff.name)) {
            this.props.toDeleteStaff(this.props.staff.id)
            this.props.goToList()
        }
    }
    render() {
        if (this.props.staff != null) {
            this.props.staff.doB = new Date(this.props.staff.doB).toISOString().substring(0, 10)
            this.props.staff.startDate = new Date(this.props.staff.startDate).toISOString().substring(0, 10)
            return (
                <div className="container">
                    <div className="row text-light mt-3">
                        <div className="btn-group">
                            <div className="btn btn-dark">
                                <Link to='/stafflist'>Danh sách Nhân Viên</Link>
                            </div>
                            <div className="btn btn-dark">/</div>
                            <div className="btn btn-dark">{this.props.staff.name}</div>
                        </div>
                        <div className="col-12">
                            <h3>{this.props.staff.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div>
                        <RenderStaff staff={this.props.staff}
                            departmentName={this.props.departmentName} />
                        <div className="row">
                            <div className="col-sm-4 col-md-2 mt-4">
                                <Button onClick={this.toggleModal}>
                                    <span className="fa fa-plus-square">Thay đổi thông tin</span>
                                </Button>
                            </div>
                            <div className="col-sm-4 col-md-2 mt-4">
                                <Button onClick={this.deleteStaff}>
                                    <span className="fa fa-plus-square">Xóa Nhân Viên</span>
                                </Button>
                            </div>
                        </div>

                    </div>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                        <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                        <ModalBody>
                            <div className="row row-content">
                                <div className="col-12 text-center">
                                    <h3>Vui lòng điền chính xác và đầy đủ thông tin vào form sau:</h3>
                                </div>
                                <div className="col-12">
                                    <LocalForm onSubmit={this.handleSubmit} initialState={this.props.staff}>
                                        <Row className="form-group">
                                            <Label htmlFor="name" md={3}>Họ Tên</Label>
                                            <Col md={9}>
                                                <Control.text model=".name" id="name" name="name" placeholder="từ 5 - 30 kí tự"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(5), maxLength: maxLength(30)
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".name"
                                                    show="touched"
                                                    messages={{
                                                        required: '*',
                                                        minLength: 'Họ tên ít nhất 5 ký tự',
                                                        maxLength: 'Họ tên không quá 30 ký tự'
                                                    }} />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="doB" md={3}>Ngày sinh</Label>
                                            <Col md={9}>
                                                <Control.text type="date" model=".doB" id="doB" name="doB"
                                                    className="form-control"
                                                    validators={{
                                                        required,
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".doB"
                                                    show="touched"
                                                    messages={{
                                                        required: '* trường bắt buộc',

                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="startDate" md={3}>Ngày vào</Label>
                                            <Col md={9}>
                                                <Control.text type="date" model=".startDate" id="startDate" name="startDate"
                                                    className="form-control"
                                                    validators={{
                                                        required

                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".startDate"
                                                    show="touched"
                                                    messages={{
                                                        required: '* trường bắt buộc',

                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="departmentId" md={3}>Bộ phận</Label>
                                            <Col md={9}>
                                                <Control.select model=".departmentId" id="department" name="departmentId"
                                                    className="form-control"
                                                    validators={
                                                        required
                                                    }
                                                >
                                                    <option value="Dept01" selected>Sale</option>
                                                    <option value="Dept02">HR</option>
                                                    <option value="Dept03">Marketing</option>
                                                    <option value="Dept04">IT</option>
                                                    <option value="Dept05">Finance</option>
                                                </Control.select>
                                                <Errors
                                                    className="text-danger"
                                                    model=".department"
                                                    show="touched"
                                                    messages={{
                                                        required: '* trường bắt buộc',
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="salaryScale" md={3}>Hệ số lương</Label>
                                            <Col md={9}>
                                                <Control.text model=".salaryScale" name="salaryScale" placeholder="1.0 -> 3.0"
                                                    className="form-control"
                                                    validators={{
                                                        required, isNumber
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".salaryScale"
                                                    show="touched"
                                                    messages={{
                                                        required: '* trường bắt buộc',
                                                        isNumber: "Trường này chỉ nhận kí tự là số"
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="annualLeave" md={3}>Ngày nghỉ còn lại</Label>
                                            <Col md={9}>
                                                <Control.text model=".annualLeave" name="annualLeave" placeholder="ex: 1.5"
                                                    className="form-control"
                                                    validators={{
                                                        required, isNumber
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".annualLeave"
                                                    show="touched"
                                                    messages={{
                                                        required: '* trường bắt buộc',
                                                        isNumber: "Trường này chỉ nhận kí tự là số"
                                                    }}
                                                />

                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="overTime" md={3}>Số ngày làm thêm</Label>
                                            <Col md={9}>
                                                <Control.text model=".overTime" name="overTime" placeholder="ex: 1.5"
                                                    className="form-control"
                                                    validators={{
                                                        required, isNumber
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".overTime"
                                                    show="touched"

                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={{ size: 10 }}>
                                                <Button type="submit" color="primary">
                                                    Sửa thông tin
                                                        </Button>
                                            </Col>
                                        </Row>
                                    </LocalForm>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            )
        }

        else
            return (
                <div></div >
            );
    }
}

export default StaffDetail;