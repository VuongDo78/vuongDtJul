
import * as actionTypes from './actionTypes';
export const Staff = (state = {
    isLoading: true,
    errMessage: null,
    staffs: []
}, action) => {
    switch (action.type) {
        case actionTypes.STAFF_LOADING:
            return { ...state, ...{ isLoading: true, staffs: [], errMessage: null } }
        case actionTypes.NEW_STAFFS:
            return { ...state, ...{ isLoading: false, staffs: action.payload, errMessage: null } }
        case actionTypes.STAFF_UPDATE:
            return { ...state, ...{ isLoading: false, staffs: action.payload, errMessage: null } }
        case actionTypes.STAFF_ERROR:
            return { ...state, ...{ isLoading: false, staffs: [], errMessage: action.payload } }
        default:
            return state;
    }
}