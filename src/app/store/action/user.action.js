import axios from "axios";
import packageJson from "../../../../package.json";
import appConfig from "../../../config/config";
import { getLocalStorage } from "../../common";
import { commonConstants } from "../../constant";
const BASE_URL = appConfig.apiConfig.apiBaseUrl;

export const getUserDetails = (callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}get_user_details`,
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

export const getUserGroup = (callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}get_user_groups`,
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

export const addUserGroup = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}add_user_groups`,
      headers: {
        Authorization: `Bearer ${getLocalStorage(
          commonConstants.LOCAL_STORAGE_ACCESS_TOKEN_KEY,
          ""
        )}`,
        // version: `v ${apiVersion}`,
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

export const editUserGroup = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}add_user_groups`,
      headers: {
        Authorization: `Bearer ${getLocalStorage(
          commonConstants.LOCAL_STORAGE_ACCESS_TOKEN_KEY,
          ""
        )}`,
        // version: `v ${apiVersion}`,
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

export const deleteUserGroup = (_payload, callback) => {
  return async () => {
    axios({
      method: "POST",
      url: `${BASE_URL}delete_user_groups`,
      headers: {
        Authorization: `Bearer ${getLocalStorage(
          commonConstants.LOCAL_STORAGE_ACCESS_TOKEN_KEY,
          ""
        )}`,
        // version: `v ${apiVersion}`,
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
