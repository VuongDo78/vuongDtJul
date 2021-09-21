import * as actionTypes from './actionTypes'

export const deparments = (state = {
    isLoading: true,
    errMessage: null,
    departments: []
}, action) => {
    switch (action.type) {
        case actionTypes.DEPARTMENT_LOADING:
            return { ...state, ...{ isLoading: true, departments: [], errMessage: null } }
        case actionTypes.DEPARTMENT_ADD:
            return { ...state, ...{ isLoading: false, departments: action.payload, errMessage: null } }
        case actionTypes.DEPARTMENT_ERROR:
            return { ...state, ...{ isLoading: false, departments: [], errMessage: action.payload } }
        default:
            return state;
    }
}
