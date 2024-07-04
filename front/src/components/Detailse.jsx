import React, { useState } from "react";

import pic from "../assets/images/pic.jpg";
import arrowup from "../assets/images/arrowup.png";
import quastion from "../assets/images/quastion.jpg";
import Tabale1 from "./Tabale1";

import tick2 from "../assets/images/tick2.png";
import pey from "../assets/images/pey.png";
import pey2 from "../assets/images/pey2.png";
import pey4 from "../assets/images/pey4.png";

import pey3 from "../assets/images/pey3.png";
import pey5 from "../assets/images/pey5.png";
import pey6 from "../assets/images/pey6.png";
import pey7 from "../assets/images/pey7.png";

import pey8 from "../assets/images/pey8.png";
import pey10 from "../assets/images/pey10.png";

import pey11 from "../assets/images/pey11.png";

function Detailse() {
  const [number, setNumber] = useState(402461081);

  const [image, setImage] = useState(false);

  return (
    <div className="flex justify-between max-w-[1400px] p-2 mx-auto">
      <div className="relative">
        <div className="flex items-center text-[10px] gap-2 absolute bottom-[18rem]">
          <img src={arrowup} alt="/" className="w-[10px]" />
          <button className="border-[1px] w-[130px] h-[30px] shadow-sm p-1 rounded-md">
            منوی کاربری
          </button>
          <button className="border-[1px] w-[130px] h-[30px] shadow-sm p-1 rounded-md">
            اطلاعات جامع دانشجو
          </button>
          <button className="border-t-[3px] shadow-md border-yellow-400 w-[130px] h-[30px] rounded-md">
            اطلاعات جامع دانشجو[2]
          </button>
        </div>
        <div className="flex items-center gap-3 border-t-[1px] p-2 border-gray-400 text-sm mt-4">
          <button className="border-[1px] p-1 border-gray-500 shadow-sm shadow-gray-300 rounded-md">
            <img src={quastion} alt="/" className="w-[14px]" />
          </button>
          <p className="text-[13px] font-bold">اطلاعات جامع دانشجو</p>
        </div>
        <div className="flex flex-col items-center gap-5 mt-6">
          <div className="flex items-center w-[210px] justify-center gap-2">
            <label className="text-[12px]">شماره دانشجو :</label>
            <input
              value={number}
              type="text"
              className="border-[1px] border-gray-800 outline-none w-[100px] text-[13px] h-[17px] rounded-sm"
            />
          </div>
          <div className="flex gap-1 mb-[-6px] items-center text-[12px] justify-center ml-10 w-[140px]">
            <label>نام خانوادگي و نام :</label>
            <p>جباری سینا</p>
          </div>
          <div className="flex gap-1 mb-[-6px] items-center text-[12px] justify-center w-[140px]">
            <label>نام پدر:</label>
            <p>محمد علی</p>
          </div>
          <div className="flex gap-1 mb-[-6px] items-center text-[12px] justify-center w-[140px]">
            <label>معدل کل:</label>
            <p>14.38</p>
          </div>
          <div className="flex gap-1 mb-[-6px] items-center text-[12px] justify-center w-[140px]">
            <label>واحد گذرانده:</label>
            <p>23.00</p>
          </div>
          <div className="flex gap-1 items-center text-[12px] justify-center w-[170px]">
            <label>مشروط کلی:</label>
            <p>0</p>
            <p>متوالی:</p>
            <p>0</p>
            <p>خاص</p>
            <p>0</p>
          </div>
          <div className="flex gap-1 items-center text-[12px] justify-center w-[140px]">
            <label>استاد راهنما:</label>
            <p>ثباتي محمدامين</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-[12px] justify-center w-[240px]">
          <div className="absolute gap-2 flex items-center right-[16rem] top-[5.6rem] ">
            <label>دانشکده:</label>
            <p className="w-[200px]"> مهندسي شيمي، نفت و گاز</p>
          </div>
          <div className="absolute gap-2 flex items-center right-[16rem] top-[7rem] ">
            <label className="w-[67px]">گروه آموزشی:</label>
            <p className="w-[200px]">واحد آموزش كارشناسي</p>
          </div>
          <div className="absolute gap-2 flex items-center right-[18rem] top-[8.8rem] ">
            <label className="w-[30px]">رشته:</label>
            <p className="w-[200px]">مهندسی شیمی</p>
          </div>

          <div className="absolute gap-2 flex items-center right-[17rem] top-[10.4rem] ">
            <label className="w-[59px]">مقطع و دوره :</label>
            <p className="w-[200px]">كارشناسي روزانه </p>
          </div>

          <div className="absolute gap-2 flex items-center right-[18rem] top-[12.4rem] ">
            <label className="w-[52px]">واحد / مرکز:</label>
            <p className="w-[200px]">دانشگاه</p>
          </div>

          <div className="absolute gap-2 flex items-center right-[17rem] top-[12.4rem] ">
            <label className="w-[69px]">آخرین وضعیت:</label>
            <p className="w-[80px] border-blue-500 text-blue-600 border-b-[1px]">
              مشغول به{" "}
            </p>
          </div>

          <div className="absolute gap-2 flex items-center right-[19rem] top-[14.4rem] ">
            <label className="w-[69px]">اجازه ثبت نام:</label>
            <p className="w-[200px] text-blue-500"> دارد </p>
          </div>

          <div
            onMouseEnter={() => setImage(true)}
            onMouseLeave={() => setImage(false)}
            className={`absolute ${
              image ? "w-[160px]" : "w-[90px]"
            }  gap-2 flex items-center right-[36rem] top-[2.4rem]`}
          >
            <img src={pic} alt="/" />
            <p className="overflow-hidden">.</p>
          </div>

          <div className="absolute right-2 mt-9">
            <Tabale1 />
          </div>
        </div>
      </div>

      <div className="text-[13px]">
        <span>
          {" "}
          برای مشاهده جزئیات بیشتر روی نوشته های زیر خط دار کلیک کنید
        </span>
      </div>

      <div className="ml-[-5px]">
        <img src={tick2} alt="/" />
      </div>

      <div className="absolute flex items-center gap-3 bottom-[-2rem]  right-4 border-[1px] w-fit border-gray-700">
        <div className="flex items-center text-[12px]">
          <p>معدل دانشگاه:</p>
          <p>14.80</p>
        </div>

        <div className="flex items-center text-[12px] ">
          <p>معدل دانشکده:</p>
          <p>14.82</p>
        </div>

        <div className="flex items-center text-[12px] ">
          <p>معدل رشته:</p>
          <p>14.82</p>
        </div>
      </div>

      <div className="absolute flex gap-3 items-center bottom-[-2.4rem] right-[22rem]">
        <img
          src={pey}
          alt="/"
          className="w-[55px] h-[29px] cursor-pointer hover:border-yellow-400"
        />
        <img
          src={pey2}
          alt="/"
          className="w-[55px] h-[27px] cursor-pointer hover:border-yellow-400"
        />
        <img
          src={pey3}
          alt="/"
          className="w-[55px] h-[24px] cursor-pointer hover:border-yellow-400"
        />
        <img
          src={pey4}
          alt="/"
          className="w-[55px] h-[24px] cursor-pointer hover:border-yellow-400"
        />
        <img
          src={pey5}
          alt="/"
          className="w-[55px] h-[24px] cursor-pointer hover:border-yellow-400"
        />
        <img
          src={pey7}
          alt="/"
          className="w-[55px] h-[27px] cursor-pointer hover:border-yellow-400"
        />
      </div>

      <div className="absolute bg-[#ECE9D8] bottom-[-8rem] z-30 flex items-center gap-3">
        <img className="w-[50px] h-[23px]" src={pey8} alt="/" />
        <img className="w-[52px] h-[20px]" src={pey10} alt="/" />
      </div>

      <div className="bottom-[-8rem] z-20 absolute left-4">
        <img className="w-[50px]" src={pey11} alt="" />
      </div>

      <div className="bg-green-800 flex items-center gap-[10rem] absolute bottom-[-9.6rem] z-20 w-full left-0">
        <p className="bg-green-800 text-white text-sm">1 پیغام</p>
        <p className="bg-green-800  text-[12px] text-white">
          جستجوي اطلاعات دانشجو انجام شد
        </p>
      </div>
    </div>
  );
}

export default Detailse;
