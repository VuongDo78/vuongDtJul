import { createStore,combineReducers, applyMiddleware } from 'redux';
import { Payrolls} from './payroll'
import { deparments} from './departments'
import { Staff} from './staffs'
import {DeparmentStaffs} from './departmentStaff'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            payrolls : Payrolls,
            departments : deparments,
            staffs : Staff ,
            departmentStaffs : DeparmentStaffs
        }),
        applyMiddleware(thunk,logger)
        
    );

    return store;
}