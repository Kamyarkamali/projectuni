import React, { useState } from "react";

import pic from "../assets/images/pic.jpg";
import arrowup from "../assets/images/arrowup.png";
import quastion from "../assets/images/quastion.jpg";
import Tabale1 from "./Tabale1";

function Detailse() {
  const [number, setNumber] = useState(402461081);

  const [image, setImage] = useState(false);

  return (
    <div className="flex justify-between max-w-[1400px] p-2 mx-auto">
      <div className="relative">
        <div className="flex items-center text-[10px] gap-2">
          <img src={arrowup} alt="/" className="w-[10px]" />
          <button className="border-[1px] shadow-sm p-1 rounded-md">
            منوی کاربری
          </button>
          <button className="border-t-[3px] shadow-md border-yellow-400 p-1 rounded-md">
            اطلاعات جامع دانشجو
          </button>
        </div>
        <div className="flex items-center gap-3 text-sm mt-4">
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
              مشغول به تحصيل{" "}
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
            <p>.</p>
          </div>

          <div className="absolute right-2 mt-9">
            <Tabale1 />
          </div>
        </div>
      </div>

      <div className="text-[11px]">
        <span className="bg-red-200 p-1">
          {" "}
          برای مشاهده جزئیات بیشتر روی نوشته های زیر خط دار کلیک کنید
        </span>
      </div>

      <div>left</div>
    </div>
  );
}

export default Detailse;
