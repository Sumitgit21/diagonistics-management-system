import { getLocalStorage } from "../../app/utils";
import packageJson from "../../../package.json";

const apiVersion = packageJson.version;
let token = getLocalStorage("refreshToken", true);
export function authHeader() {
  if (token) {
    return {
      Authorization: getLocalStorage("refreshToken", true),
      version: `rjsw ${apiVersion}`,
    };
  } else {
    return {};
  }
}
