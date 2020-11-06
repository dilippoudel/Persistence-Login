import { AppState, ActionTypes } from "./../types";
type FormDataType = {
  email: string;
  password: string;
};
type InitialStateTypes = {
  isLoggedIn: boolean;
  formData: FormDataType;
  isLoading: boolean;
  error: {};
  user: {};
};

const initialState: InitialStateTypes = {
  isLoggedIn: false,
  formData: { email: "", password: "" },
  isLoading: true,
  error: {},
  user: {},
};
export const authReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    case "GET_LOGIN_INPUT":
      if ("payload" in action) {
        return {
          ...state,
          formData: { ...action.payload },
        };
      }
      break;
    case "GET_PROFILE":
      if ("payload" in action) {
        return {
          ...state,
          isLoggedIn: true,
          user: { ...action.payload },
        };
      }

      break;
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoading:true,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};
