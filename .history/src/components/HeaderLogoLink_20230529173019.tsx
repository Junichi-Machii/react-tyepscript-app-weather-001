import React from "react";

import { logo } from "../../public/image/favicon.png";

const HeaderLogoLink = () => {
  return (
    <>
      <div className="navLogo">
        <a href="https://office-machii.com/" className="logolink">
          <img className="logo-img" src={l}  alt="" />
        </a>
      </div>
    </>
  );
};

export default HeaderLogoLink;
