import { DEPARTMENTS, ROLE, STAFFS } from '../component/staffs';

export const initialState = {
    staffs: STAFFS,
    departments: DEPARTMENTS,
    role: ROLE,
};

export const Reducer = (state = initialState, action) => {
    return state;
};