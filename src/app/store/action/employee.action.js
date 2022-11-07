import axios from "axios";
import packageJson from "../../../../package.json";
import appConfig from "../../../config/config";
import { getLocalStorage } from "../../common";

import { commonConstants } from "../../constant";
const BASE_URL = appConfig.apiConfig.apiBaseUrl;

export const addEmployee = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}add_employee`,
      headers: {
        Authorization: `Bearer ${getLocalStorage(
          commonConstants.LOCAL_STORAGE_ACCESS_TOKEN_KEY,
          ""
        )}`,
      },
      data: _payload,
    })
      .then((response) => {
        if (response?.status == 200) {
          callback(response.data);
        }
      })
      .catch((error) => {
        callback("error");
      });
  };
};
