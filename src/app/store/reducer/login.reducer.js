// import { getLocalStorage, setLocalStorage } from "../../common/common";
import { loginConstants } from "../constants/login.constant";

let initialState = {
  isLogin: false,
  error: "",
  loginDetails: {},
  userDetails: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };

    default:
      return state;
  }
};
