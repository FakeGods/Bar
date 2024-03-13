import React from "react";
import { logo } from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={logo} width={100} height={40} alt="logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
