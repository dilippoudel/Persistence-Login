import { ActionTypes } from './../types';

export const logInRequest = ():ActionTypes =>{
    return{
        type:'LOGIN_REQUEST'
    }
}
export const logInSuccess = ():ActionTypes => {
    return{
        type:'LOGIN_SUCCESS'
    }
}
export const logInFailed = (data:any):ActionTypes => {
    return{
        type:'LOGIN_FAILED',
        payload:data
    }
}
export const getInput = (input:any):ActionTypes => {
    return{
        type:'GET_LOGIN_INPUT',
        payload: input
       
    }
}
export const getUserProfile = (responseData:any):ActionTypes => {
    return{
        type:'GET_PROFILE',
        payload: responseData
    }
}
export const setLoggedIn = (value:boolean) =>{
    return{ 
        type: 'SET_LOGGED_IN', 
        payload: value
}
}