import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import dateFormat from 'dateformat';
class StaffDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.selectedStaff != null) {
            const selectedStaffs = this.props.selectedStaff;
            return (
                <div className="col-sm-6 col-md-4 mt-5">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Họ và Tên : {selectedStaffs.name}</CardTitle>
                            <CardText>Ngày Sinh : {dateFormat(selectedStaffs.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày Vào Làm :{dateFormat(selectedStaffs.startDate, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng Ban :{selectedStaffs.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại :{selectedStaffs.annualLeave}</CardText>
                            <CardText>Số ngày làm thêm  :{selectedStaffs.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        return (
            <Card>
            </Card>

        )
    }
}
export default StaffDetail;
