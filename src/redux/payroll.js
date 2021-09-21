import * as actionTypes from './actionTypes'

export const Payrolls = (state = {
    isLoading: true,
    errMessage: null,
    payrolls: []
}, action) => {
    switch (action.type) {
        case actionTypes.PAYROLL_LOADING:
            return { ...state, ...{ isLoading: true, payrolls: [], errMessage: null } }
        case actionTypes.PAYROLL_ADD:
            return { ...state, ...{ isLoading: false, payrolls: action.payload, errMessage: null } }
        case actionTypes.PAYROLL_ERROR:
            return { ...state, ...{ isLoading: false, payrolls: [], errMessage: action.payload } }
        default:
            return state;
    }
}