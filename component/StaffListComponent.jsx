import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
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
    renderStaff(staff) {
        if (staff != null) {
            return (
                <Card>
                    <CardBody>
                        <CardTitle>{staff.name}</CardTitle>
                        <CardText>{staff.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
    renderComments(comments) {
        if(comments != null){
            return (
                <div className="col-sm-6 col-md-4 mt-5">
                    <div>
                        <h4>Comment</h4>
                        <div>
                            <ul className="list-unstyled">
                                {
                                    comments.map((comment) => {
                                        const date = dateFormat(comment.date, "mmm dd, yyyy");
                                        return (
                                            <div key={comment.id}>
                                                <div>{comment.comment}</div>
                                                <div>-- {comment.author}, {date}</div>
                                            </div>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }else{
            return <div></div>
        }
    }
    render() {
        if (this.props.staffs != null) {
            const staffList = this.props.staffs.map((staff) => {
                return (
                    <div key={staff.id} className="col-sm-6 col-md-4 mt-5">
                        <Card onClick={() => this.onStaffSelect((staff))}>
                            <CardImgOverlay>
                                <CardTitle>{staff.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                )
            });
            const comments = this.state.selectedStaff != null ? this.state.selectedStaff.comments : null;
            return (
                <div className="container">
                    <div className="row">
                        {staffList}
                    </div>
                    <div className="row">
                        <StaffDetail selectedStaff={this.state.selectedStaff}></StaffDetail>
                        {this.renderComments(comments)}
                    </div>
                </div>
            );
        } else {
            return <div>StaffList is empty!</div>
        }
    }
}

export default StaffList;