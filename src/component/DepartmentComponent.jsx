import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading'

function Department(props) {

    const ListDepartments = ({ isLoading, errMessage, departments }) => {
        if (isLoading) {
            return <Loading />
        } else if (errMessage) {
            return <div className="col-12"><h5>{errMessage}</h5></div>
        } else {
            return departments.map((department) => {
                return (
                    <Card className="col-sm-6 col-md-4   text-center bg-dark text-light border-light">
                        <Link to={`/departments/${department.id}`} >
                        <h4 className="mt-2">{department.name}</h4>
                        <p>Số lượng nhân viên: {department.numberOfStaff}</p>
                        </Link>

                    </Card>
                );

            })
        }
    }


    return (
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
                <br />
            </div>
            <div className="row mb-5">
                <ListDepartments
                    departments={props.departments.departments}
                    isLoading={props.departments.isLoading}
                    errMessage={props.departments.errMessage}
                />
            </div>
        </div>
    );
}

export default Department;