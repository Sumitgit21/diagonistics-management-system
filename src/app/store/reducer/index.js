import { loginReducer } from "./login.reducer";
import Mode from "../setting/setting";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  login: loginReducer,
  mode: Mode,
});

export default rootReducer;
