import React, { useState } from "react";

import logo from "../assets/images/logo.gif";

import ReCAPTCHA from "react-google-recaptcha";

function Header() {
  return (
    <>
      <div className="flex justify-between max-w-[1420px] mx-auto">
        {/* <div>right</div> */}

        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-[9px]">به نام خدا</p>
          <div className="flex flex-col items-center mt-[2rem]">
            <p className="text-[14px]">دانشگاه علم و صنعت ايران</p>
            <p className="text-xl">سامانه جامع دانشگاهي گلستان</p>
          </div>
        </div>

        <div>
          <img src={logo} alt="logo uni" />
        </div>
      </div>
    </>
  );
}

export default Header;
