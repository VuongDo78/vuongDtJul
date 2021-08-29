import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap'
import dateFormat from 'dateformat';
import StaffDetail from './StaffDetailComponent';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null
        }
    }
    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    render() {
        if (this.props.staffs != null) {
            const staffList = this.props.staffs.map((staff) => {
                return (
                    <div key={staff.id} className="col-sm-6 col-md-4 mt-5">
                        <Card onClick={() => this.onStaffSelect((staff))}>
                            <CardBody>
                                <CardTitle className="cardTittle text-center mt-4">{staff.name}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                )
            });

            return (
                <div className="container">
                    <div className="row">
                        {staffList}
                    </div>
                    <div className="row">
                        <StaffDetail selectedStaff={this.state.selectedStaff}></StaffDetail>

                    </div>
                </div>
            );
        } else {
            return <div>StaffList is empty!</div>
        }
    }
}

export default StaffList;
