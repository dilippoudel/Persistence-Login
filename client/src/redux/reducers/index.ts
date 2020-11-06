import { authReducer } from './authReducer';
import {combineReducers} from 'redux'
export const createRootReducer = () => combineReducers({
    authReducer
})