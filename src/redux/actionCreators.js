import * as actionTypes from './actionTypes';
import { STAFFS } from '../component/staffs';
import { baseUrl } from './Base_url';

export const newstaff = (staffs) => ({
    type: actionTypes.NEW_STAFFS,
    payload: staffs
});
export const staffLoading = () => ({
    type: actionTypes.STAFF_LOADING,

})
export const staffError = (errmsg) => ({
    type: actionTypes.STAFF_ERROR,
    payload: errmsg
})
export const fetchStaffs = () => (dispatch) => {
    dispatch(staffLoading(true));
    return fetch(baseUrl + 'staffs')
        .then(response => response.json())
        .then(staffs => dispatch(newstaff(staffs)))
        .catch(err => dispatch(staffError(err.message)));
}

export const staffDelete = (id) => (dispatch) => {
    return fetch(baseUrl + 'staffs/' + id, {
        method: 'DELETE',
    }).then(response => response.json())
        .then(staffs => dispatch(newstaff(staffs)))
}

export const staffAdd = (staff) => (dispatch) => {
    return fetch(baseUrl + 'staffs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(staff)
    }).then(response => response.json())
        .then(staffs => dispatch(newstaff(staffs)))

}
export const staffUpdate = (staff) => (dispatch) => {
    return fetch(baseUrl + 'staffs', {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(staff)
    }).then(response => response.json())
        .then(staffs => dispatch(newstaff(staffs)))

}

export const addDepartments = (departments) => ({
    type: actionTypes.DEPARTMENT_ADD,
    payload: departments
})

export const departmentLoading = () => ({
    type: actionTypes.DEPARTMENT_LOADING,
})

export const departmentError = (errmsg) => ({
    type: actionTypes.DEPARTMENT_ERROR,
    payload: errmsg
})

export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentLoading());
    return fetch(baseUrl + 'departments')
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)))
        .catch(err => dispatch(departmentError(err.message)));
}
export const addDepartmentStaffs = (departments) => ({
    type: actionTypes.DEPARTMENTSTAFFS_ADD,
    payload: departments
})

export const departmentStaffsLoading = () => ({
    type: actionTypes.DEPARTMENTSTAFFS_LOADING,
})

export const departmentStaffsError = (errmsg) => ({
    type: actionTypes.DEPARTMENTSTAFFS_ERROR,
    payload: errmsg
})
export const fetchDepartmentStaff = (departmentId) => (dispatch) => {
    dispatch(departmentStaffsLoading());
    return fetch(baseUrl + 'departments/' + departmentId)
        .then(response => response.json())
        .then(departments => dispatch(addDepartmentStaffs(departments)))
        .catch(err => dispatch(departmentStaffsError(err.message)));
}

export const addPayroll = (payrolls) => ({
    type: actionTypes.PAYROLL_ADD,
    payload: payrolls
})

export const payrollLoading = () => ({
    type: actionTypes.PAYROLL_LOADING,
})

export const payrollError = (errmsg) => ({
    type: actionTypes.PAYROLL_ERROR,
    payload: errmsg
})

export const fetchPayroll = () => (dispatch) => {
    dispatch(payrollLoading());
    return fetch(baseUrl + 'staffsSalary')
        .then(response => response.json())
        .then(payrolls => dispatch(addPayroll(payrolls)))
        .catch(err => dispatch(payrollError(err.message)));
}