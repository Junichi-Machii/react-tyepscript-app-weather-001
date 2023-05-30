import React from "react";

import logo  from "../image/favicon.png";

const HeaderLogoLink = () => {
  return (
    <>
      <div className="navLogo">
        <a href="https://office-machii.com/" className="logolink">
          <img className="logo-img" src={logo}  alt="そらとちきょ" loading="lazy" />
        </a>
      </div>
    </>
  );
};

export default HeaderLogoLink;
