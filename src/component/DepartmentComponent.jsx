import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card} from 'reactstrap';
import { Link } from 'react-router-dom';

function Department(props) {

    const departments = props.department.map((department) => {
        return (
            <Card className="col-sm-6 col-md-4   text-center bg-dark text-light border-light">
                <h4 className="mt-2">{department.name}</h4>
                <p>Số lượng nhân viên: {department.numberOfStaff}</p>
            </Card>
        );
    });
    

    return(
        <div className="container department">
            <div className="row mt-3">
                <div className="btn-group">
                    <div className="btn btn-dark"><Link to="/home">Home</Link></div>
                    <div className="btn btn-dark">/</div>
                    <div className="btn btn-dark">Departments</div>
                </div>              
            </div>
            <div className="text-center">
                <h2>Các phòng ban</h2>
                <br/>
            </div>
            <div className="row mb-5">
                {departments}
            </div>
        </div>
    );
}

export default Department;    