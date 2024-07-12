import React from "react";

const Header = () => {
  return (
    <header className="flex items-center w-full z-20">
      <div className="flex items-center md:p-[35px] px-4 py-[20px]">
        <img
          className="md:w-[173px] w-[133px]"
          src="/assets/mascotLogo.avif"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
