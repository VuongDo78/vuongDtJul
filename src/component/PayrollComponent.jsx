import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { STAFFS } from './staffs';
import { Loading } from "./Loading"



class Payroll extends Component {

    constructor(props) {
        super(props);

        this.state = {
            payrolls: props.payrolls,
        }
        this.sortStaffId = this.sortStaffId.bind(this);
        this.sortStaffSalary = this.sortStaffSalary.bind(this);
    }

    //onclick sắp xếp id giảm dần
    sortStaffId() {
        this.setState({
            payrolls: { ...this.state.payrolls, ... { payrolls: this.state.payrolls.payrolls.sort((a, b) => b.id - a.id) } },
        })
    }

    //Sort theo lương tăng dần
    sortStaffSalary() {
        this.setState({
            payrolls: { ...this.state.payrolls, ... { payrolls: this.state.payrolls.payrolls.sort((a, b) => b.salary - a.salary) } }, 

        })
    }


    render() {

        const RenderPayroll = ({ payroll }) => {

            //Công thức tính lương
            const basicSalary = 3000000;
            const overTimeSalary = 200000;
            const salary = (Math.round((payroll.salaryScale * basicSalary)
                + (payroll.overTime * overTimeSalary)))
                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


            return (
                <Card className="bg-dark text-light border-light">
                    <CardTitle className="text-center pt-2">{payroll.name}</CardTitle>
                    <div className="pl-2">
                        <p>Mã nhân viên: {payroll.id}</p>
                        <p>Hệ số lương: {payroll.salaryScale}</p>
                        <p>Số giờ làm thêm: {payroll.overTime}</p>
                    </div>
                    <p className="btn btn-warning text-center ">Lương: {payroll.salary}</p>
                </Card>
            );
        }
        // var sortedPayroll = this.props.payroll;
        // sortedPayroll.map(element => {

        //     //Công thức tính lương
        //     const basicSalary = 3000000;
        //     const overTimeSalary = 200000;
        //     const salary = (element.salaryScale * basicSalary) + (element.overTime * overTimeSalary);
        //     element.salary = salary;
        //     return element;
        // });
        //     sortedPayroll.sort(function (a,b)  {

        //         return (a.salary - b.salary);
        //     });
        const ListOfPayroll = ({ isLoading, errMessage, payrolls }) => {
            if (isLoading) {
                return <Loading />
            } else if (errMessage) {
                return <div className="col-12"><h5>{errMessage}</h5></div>
            } else {
                return (
                    <div className="row">
                        {payrolls.map((payroll) => {
                            return <div className="col-sm-6 col-md-2 mt-5" key={payroll.id}>

                                <RenderPayroll payroll={payroll}
                                />

                            </div>
                        })}
                    </div>
                )
            }
        }


        {/*const payroll = this.state.payrolls.map((payroll) => {
            return (
                <div className="col-12 col-md-6 col-lg-4 mb-2" key={payroll.id}  >
                    <RenderPayroll payroll={payroll} />
                </div>
            );
        });*/}

        return (
            <div className="container">
                <div className="row">
                    <div className="btn-group mt-3">
                        <div className="btn btn-dark"><Link to='/home'>Home</Link></div>
                        <div className="btn btn-dark">Payroll</div>
                    </div>
                    <div className="col-12 ">
                        <h3 className="text-center">Bảng Lương nhân viên</h3>
                        <hr />
                        <button type="button" className="btn btn-dark m-2 fa fa-sort-numeric-desc" onClick={this.sortStaffId}> Mã nhân viên</button>
                        <button type="button" className="btn btn-dark m-2 fa fa-arrow-up" onClick={this.sortStaffSalary}> Lương</button>
                    </div>
                </div>
                <div className="row">
                    <ListOfPayroll
                        isLoading={this.state.payrolls.isLoading}
                        payrolls={this.state.payrolls.payrolls}
                        errMessage={this.state.payrolls.errMessage}
                    />
                </div>
            </div>
        );
    }
}


export default Payroll;