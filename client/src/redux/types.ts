export type AppState = {
    authReducer: {
        isLoggedIn: boolean,
        isLoading:boolean,
        formData:{},
        error:{},
        user:{}
    }
}
// types for actions
type LogInRequestType = {
    type: string,
    payload:any
}

type LogInSuccessType = {
    type: string
}

type LogInFailedType = {
    type:string,
    payload:any
}
type GetInputType = {
    type:string,
    payload:{}
}
type GetUserData = {
    type:string,
    payload:any
}
type SetLoggedIn = {
    type: string
}
export type ActionTypes = | LogInRequestType | LogInSuccessType | LogInFailedType | GetInputType | GetUserData | SetLoggedIn

