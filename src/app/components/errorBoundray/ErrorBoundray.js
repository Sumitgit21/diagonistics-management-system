import React from "react";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import packageJson from "../../../../package.json";

Bugsnag.start({
  apiKey: process.env.REACT_APP_BUGSNAG_API_KEY,
  plugins: [new BugsnagPluginReact()],
  appVersion: packageJson.version,
  appType: "client",
  collectUserIp: true,
  enabledReleaseStages: ["production", "staging"],
  onError: function(event) {
    // const {
    //   user_master_id,
    //   email,
    //   mobile_primary,
    //   first_name,
    //   last_name,
    // } = getLocalStorage("user", {});

    event.setUser(
      `${"sumit mondal"}`,
      `${"test@sumit.com"}`,
      `${"sumit mondal"}`
    );
  },
});

const ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);
export default ErrorBoundary;
