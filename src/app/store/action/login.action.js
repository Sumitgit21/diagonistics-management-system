import axios from "axios";
import packageJson from "../../../../package.json";
import appConfig from "../../../config/config";

const BASE_URL = appConfig.apiConfig.apiBaseUrl;

export const loginWithUserName = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}login`,
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
