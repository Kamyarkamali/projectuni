import React from "react";

import arrow from "../assets/images/arrow.png";

function Saidbar() {
  return (
    <div className="w-[150px] bg-[#F9F8F4] h-screen rounded-l-lg ">
      <div className="flex flex-col text-[12px] items-start bg-[#F9F8F4] relative">
        <div className="flex mt-2 items-center justify-between w-full hover:border-[1px] cursor-pointer border-yellow-300 p-1">
          <p className="inline-block bg-[#F9F8F4]">دانشجو</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="flex mt-2 items-center justify-between w-full hover:border-[1px] cursor-pointer border-yellow-300 p-1">
          <p className="inline-block bg-[#F9F8F4]">شهریه</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="flex mt-2 items-center justify-between w-full hover:border-[1px] cursor-pointer border-yellow-300 p-1">
          <p className="inline-block bg-[#F9F8F4]">نامه های اداری</p>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="flex mt-2 items-center justify-between w-full hover:border-[1px] cursor-pointer border-yellow-300 p-1">
          <p className="inline-block bg-[#F9F8F4]">گزارش های آموزش</p>
          <img src={arrow} alt="arrow" />
        </div>
        <p className="inline-block mt-2 bg-[#F9F8F4] hover:border-[1px] cursor-pointer border-yellow-300 p-1 w-full">
          اطلاعات جامع دانشجو
        </p>
      </div>
      <p className="absolute text-[10px] bottom-[-3.4rem] right-2">
        آخرين ورود : 1403.04.13 ساعت12:07
      </p>
    </div>
  );
}

export default Saidbar;
