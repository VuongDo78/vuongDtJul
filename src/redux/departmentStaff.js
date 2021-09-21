import * as actionTypes from './actionTypes'

export const DeparmentStaffs = (state = {
    isLoading: true,
    errMessage: null,
    departmentStaffs: []
}, action) => {
    switch (action.type) {
        case actionTypes.DEPARTMENTSTAFFS_LOADING:
            return { ...state, ...{ isLoading: true, departmentStaffs: [], errMessage: null } }
        case actionTypes.DEPARTMENTSTAFFS_ADD:
            return { ...state, ...{ isLoading: false, departmentStaffs: action.payload, errMessage: null } }
        case actionTypes.DEPARTMENTSTAFFS_ERROR:
            return { ...state, ...{ isLoading: false, departmentStaffs: [], errMessage: action.payload } }
        default:
            return state;
    }
}
