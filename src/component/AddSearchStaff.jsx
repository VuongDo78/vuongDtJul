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
const mapStateToProps = state => {
    return {
        staffs: state.STAFFS,
        departments: state.DEPARTMENTS,
        role: state.ROLE,
    }
}

class AddSearchStaff extends Component {
    constructor(props) {
        super(props);
        
        this.searchName = this.searchName.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.toggleBtnDropdown = this.toggleBtnDropdown.bind(this);
    }

    // phương thức lọc input value trong staffs nhận value cả chữ hoa và chữ thường
    searchName(event) {
        const result = this.props.staffs.filter(s => s.name.toLowerCase().match(this.state.name));
        this.setState({
            staffs: result,
            name: this.name.value
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
            name: this.state.fullname,
            doB: this.state.dob,
            salaryScale: this.state.salaryScale,
            startDate: this.state.startDate,
            department: department,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
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
 
    toggleBtnDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        })
    }


    

    render() {
        return (

            <div className="container">
               <LocalForm onSubmit={(values)=>this.searchName(values)} >
                    <Row className="form-group" >
                        <Control.text model=".search"
                        className="form-control mb-3"  id="search" name="search"
                            placeholder='Nhập tên nhân viên muốn tìm'
                            onChange={this.handleInputChanged}
                            innerRef={(input) => this.name = input} />
                        <Button type="submit" value="submit" color="primary" className=" btn mb-3 ml-2"> Tìm </Button>
                    </Row>
                </LocalForm>  
                <div className="row">  
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
        
                                                 />
                                            
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="dob" md={3}>Ngày sinh</Label>
                                        <Col md={9}>
                                            <Control.date model=".dob" id="dob" name="dob"
                                                className="form-control"
                                                />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="startDate" md={3}>Ngày vào</Label>
                                        <Col md={9}>
                                            <Control.date model=".startDate" id="startDate" name="startDate"
                                               className="form-control"
                                                 />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="department" md={3}>Bộ phận</Label>
                                        <Col md={9}>
                                            <Control.select model=".department" id="department" name="department"
                                               className="form-control"
                                                 >
                                                <option value="Dept01" selected>Sale</option>
                                                <option value="Dept02">HR</option>
                                                <option value="Dept03">Marketing</option>
                                                <option value="Dept04">IT</option>
                                                <option value="Dept05">Finance</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="salaryScale" md={3}>Hệ số lương</Label>
                                        <Col md={9}>
                                            <Control.number model=".number" id="salaryScale" name="salaryScale" placeholder="1.0 -> 3.0"
                                               className="form-control"
                                                
                                                
                                               />
                                            
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="annualLeave" md={3}>Ngày nghỉ còn lại</Label>
                                        <Col md={9}>
                                            <Control.number model=".annualLeave" id="annualLeave" name="annualLeave" placeholder="ex: 1.5"
                                               className="form-control"
                                                
                                               
                                                 />
                                            
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="overTime" md={3}>Số ngày làm thêm</Label>
                                        <Col md={9}>
                                            <Control.number model=".overTime" id="overTime" name="overTime" placeholder="ex: 1.5"
                                               className="form-control"
                                                
                                                
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
               
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(AddSearchStaff ));