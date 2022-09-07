import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright ©{" "}
            <a
              href="https://www.diptodiagnostic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              diptodiagnostic.com{" "}
            </a>
            2022
          </span>
        </div>
      </div>
    </footer>
  );
}
