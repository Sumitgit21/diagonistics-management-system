import axios from "axios";
import packageJson from "../../../../package.json";
import appConfig from "../../../config/config";
import { getLocalStorage } from "../../common";

import { commonConstants } from "../../constant";
const BASE_URL = appConfig.apiConfig.apiBaseUrl;

export const addClient = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}add_client`,
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

export const updateClientAddress = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}add_client_address`,
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

export const updateClientRates = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}add_update_client_rates`,
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

export const updateClientAgreement = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}add_update_client_agreement`,
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
