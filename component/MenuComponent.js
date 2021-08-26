import React, { Component } from 'react';
import reactDom from 'react-dom';
import { Media } from 'reactstrap';
import { STAFFS } from './staffs';
import dateFormat from 'dateformat';
import jquery from 'jquery';
class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var newDiv = document.createElement('div');
        const menu = STAFFS.map(eachStaff => {
            return (
                <div key={eachStaff.id} className=" col-sm-6 col-md-4  mt-5">
                    <button className="col-sm-12 btn" onClick={
                        function () {
                            
                            var showInfo = document.getElementById("showInfo");
                            
                            var name = document.createElement('p');
                            name.append("Họ và Tên : " + eachStaff.name);
                            newDiv.append(name);

                            var BD = document.createElement('p');
                            BD.append("Ngày Sinh :" + dateFormat(eachStaff.doB, "dd/mm/yyyy"));
                            newDiv.append(BD);

                            var start = document.createElement('p');
                            start.append("Ngày Vào Làm :" + dateFormat(eachStaff.startDate, "dd/mm/yyyy"));
                            newDiv.append(start);

                            var depart = document.createElement('p');
                            depart.append("Phòng ban:" + eachStaff.department.name);
                            newDiv.append(depart);

                            var leaveDay = document.createElement('p');
                            leaveDay.append("Số Ngày Nghỉ còn lại :" + eachStaff.annualLeave);
                            newDiv.append(leaveDay);

                            var oT = document.createElement('p');
                            oT.append("Số ngày làm thêm :" + eachStaff.overTime);
                            newDiv.append(oT);
                            showInfo.append(newDiv);

                        }}>
                            {/* em check message trên chỗ ask mentor em */}
                            
                        <Media body className="ml-5">
                            <Media heading>{eachStaff.name}</Media>
                        </Media>
                    </button>

                </div>
            );
        });
        return (
            <div id="parent"  className="container-fluid">
                <div className="row">
                    {menu}
                </div>
                <h5 className="col-sm-6 col-md-4 mt-5 mb-5 border text-left" id="showInfo"></h5>
            </div>
        )

    }


}
export default Menu;
