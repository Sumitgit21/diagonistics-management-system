import React from "react";
import "./css/error_fallback.css";
import packageJson from "../../../../package.json";
export const ErrorFallback = ({ error, info }) => {
  const onReloadClick = () => {
    window.location.reload();
  };

  const onRedirect = () => {};
  return (
    <>
      <div className="error_container">
        <div id="clouds">
          <div class="cloud x1"></div>
          <div class="cloud x1_5"></div>
          <div class="cloud x2"></div>
          <div class="cloud x3"></div>
          <div class="cloud x4"></div>
          <div class="cloud x5"></div>
        </div>
        <div class="c">
          <div class="_404">Oops!</div>
          <div class="_1">Something went wrong</div>
          {/* <div class="_2">WAS NOT FOUND</div> */}
          <a
            className="error-btn me-3"
            href="javascript:void(0)"
            onClick={onRedirect}
          >
            BACK TO HOME
          </a>
          <a
            href="javascript:void(0)"
            className="error-btn"
            type="button"
            onClick={onReloadClick}
          >
            RELOAD
          </a>
          <h5 className="colorWhite text-center mt-5 font600 font_18">
            <p>ddpl-software v{packageJson.version}</p>
          </h5>
        </div>
      </div>
    </>
  );
};
