import axios from "axios";
import packageJson from "../../../../package.json";
import appConfig from "../../../config/config";
import { getLocalStorage } from "../../common";
import { commonConstants } from "../../constant";
const BASE_URL = appConfig.apiConfig.apiBaseUrl;

export const getDefaultTestRates = (callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}get_default_test_rates`,
      headers: {
        Authorization: `Bearer ${getLocalStorage(
          commonConstants.LOCAL_STORAGE_ACCESS_TOKEN_KEY,
          ""
        )}`,
        // version: `v ${apiVersion}`,
      },
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
