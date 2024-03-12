import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b">
      <p>yes</p>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"></div>
      <a className="block w-[12rem] xl:mr-8" href="#">
        <img src={logo} width={190} height={40} alt="logo" />
      </a>
    </div>
  );
};

export default Header;
