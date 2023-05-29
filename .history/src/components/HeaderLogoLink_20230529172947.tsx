import React from "react";

import { lo } from "../../public/image/favicon.png";

const HeaderLogoLink = () => {
  return (
    <>
      <div className="navLogo">
        <a href="https://office-machii.com/" className="logolink">
          <img className="logo-img" src="../src/favicon.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default HeaderLogoLink;