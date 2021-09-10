import React, { Component } from 'react';
import { useState } from 'react';
import {
    Card, CardImg, CardTitle, CardBody
    , Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button, Label,
    Modal, ModalHeader, ModalBody, Col, Row, ButtonDropdown
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { DEPARTMENTS } from './staffs';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: props.staffs,
            classNameStaffList: 'col-sm-6 col-md-2 mt-5',
            dropdownOpen: false,
        }
        this.searchName = this.searchName.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.toggleBtnDropdown = this.toggleBtnDropdown.bind(this);
        this.state = {
            isModalOpen: false,
            dropdownOpen: false
        };
    }

    // phương thức lọc input value trong staffs nhận value cả chữ hoa và chữ thường
    searchName(values) {
        const result = this.props.staffs.filter(s => s.name.toLowerCase().match(values.search));
        this.setState({
            staffs: result,
            name: values.value
        });
        //event.preventDefault();
    }

    //khi input có value ngay lập tức sẽ truyền vào name
    //sử dụng cho nút tìm kiếm


    // dùng khi thêm nhân viên


    handleSubmit(values) {
        const department = DEPARTMENTS.find(department => department.id === this.props.department);
        const newStaff = {

            id: this.props.staffs.length,
            name: values.fullname,
            doB: values.dob,
            salaryScale: values.salaryScale,
            startDate: values.startDate,
            department: department,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            image: '/asset/images/alberto.png',
        };
        const newStaffs = [...this.props.staffs, ...[newStaff]];
        alert("Thêm nhân viên " + newStaff.name + " thành công!");
        this.setState({
            staffs: newStaffs
        })
        this.props.onAddStaff(newStaffs)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }


    sixCol(classname) {
        this.setState({ classNameStaffList: classname })
    }
    toggleBtnDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        })
    }




    render() {




        const RenderMenuItem = ({ staff }) => {
            return (


                <div >
                    <Link to={`/menu/${staff.id}`}>

                        <Card className="card">
                            <CardBody className="card-body">
                                <CardImg className="card-img-top" width="100%" src={staff.image} />

                                <CardTitle tag="h5" className="text-center mt-3">{staff.name}</CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                </div>


            );
        }

        const menu = this.props.staffs.map((staff) => {
            return (

                <div className={this.props.classNameStaffList} key={staff.id}>

                    <RenderMenuItem staff={staff} />

                </div>
            );
        });

        return (

            <div className="container">
                <div className="row">

                    <div className="col text-center mt-3">
                        <h2>Danh sách nhân viên</h2>

                        <hr />
                    </div>
                </div>


                <LocalForm onSubmit={(values) => this.searchName(values)} >
                    <Row className="form-group" >
                        <Control.text model=".search"
                            className="form-control mb-3" id="search" name="search"
                            placeholder='Nhập tên nhân viên muốn tìm'
                            onChange={this.handleInputChanged}
                            innerRef={(input) => this.name = input} />
                        <Button type="submit" value="submit" color="primary" className=" btn mb-3 ml-2"> Tìm </Button>
                    </Row>
                </LocalForm>

                <div className="row">
                    <div className=" col-md-7"></div>
                    <div className="col-sm-3 col-md-3">
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleBtnDropdown}>
                            <DropdownToggle caret>
                                Thay đổi số cột
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem
                                    onClick={() => { this.sixCol("col-sm-6 col-md-2 mt-5") }}
                                >
                                    6 cột
                                </DropdownItem>
                                <DropdownItem className="text-bold"
                                    onClick={() => { this.sixCol("col-sm-6 col-md-4 mt-5") }}
                                >
                                    3 cột
                                </DropdownItem>

                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <Button onClick={this.toggleModal}>
                            <span className="fa fa-plus-square">Thêm Nhân Viên</span>
                        </Button>
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
                                <LocalForm onSubmit={this.handleSubmit}>
                                    <Row className="form-group">
                                        <Label htmlFor="fullname" md={3}>Họ Tên</Label>
                                        <Col md={9}>
                                            <Control.text model=".fullname" id="fullname" name="fullname" placeholder="từ 5 - 30 kí tự"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(5), maxLength: maxLength(30)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".fullname"
                                                show="touched"
                                                messages={{
                                                    required: '*',
                                                    minLength: 'Họ tên ít nhất 5 ký tự',
                                                    maxLength: 'Họ tên không quá 30 ký tự'
                                                }} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="dob" md={3}>Ngày sinh</Label>
                                        <Col md={9}>
                                            <Control.text type="date" model=".dob" id="dob" name="dob"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                }}
                                            />
                                            <Errors
                                            className="text-danger"
                                            model=".dob"
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
                                                    required,isNumber
                                                    
                                                }}
                                            />
                                            <Errors
                                            className="text-danger"
                                            model=".dob"
                                            show="touched"
                                            messages={{
                                                required: '* trường bắt buộc',
                                                
                                            }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="department" md={3}>Bộ phận</Label>
                                        <Col md={9}>
                                            <Control.select model=".department" id="department" name="department"
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
                                            model=".dob"
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
                                            <Control.text type="number" model=".number" id="salaryScale" name="salaryScale" placeholder="1.0 -> 3.0"
                                                className="form-control"
                                                validators={{
                                                    required, isNumber
                                                }}
                                            />
                                            <Errors
                                            className="text-danger"
                                            model=".dob"
                                            show="touched"
                                            messages={{
                                                required: '* trường bắt buộc',
                                                isNumber :"Trường này chỉ nhận kí tự là số"
                                            }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="annualLeave" md={3}>Ngày nghỉ còn lại</Label>
                                        <Col md={9}>
                                            <Control.text type="number" model=".annualLeave" id="annualLeave" name="annualLeave" placeholder="ex: 1.5"
                                                className="form-control"
                                                validators={{
                                                    required, isNumber
                                                }}
                                            />
                                            <Errors
                                            className="text-danger"
                                            model=".dob"
                                            show="touched"
                                            messages={{
                                                required: '* trường bắt buộc',
                                                isNumber :"Trường này chỉ nhận kí tự là số"
                                            }}
                                            />

                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="overTime" md={3}>Số ngày làm thêm</Label>
                                        <Col md={9}>
                                            <Control.text type="number" model=".overTime" id="overTime" name="overTime" placeholder="ex: 1.5"
                                                className="form-control"
                                                validators={{
                                                    required, isNumber
                                                }}
                                            />
                                            <Errors
                                            className="text-danger"
                                            model=".dob"
                                            show="touched"
                                            messages={{
                                                required: '* trường bắt buộc',
                                                isNumber :"Trường này chỉ nhận kí tự là số"
                                            }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{ size: 10 }}>
                                            <Button type="submit" color="primary">
                                                Thêm
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;