import React from "react";
import btn1 from "../assets/images/btn1.png";
import btn2 from "../assets/images/btn2.png";
import btn3 from "../assets/images/btn3.png";
import Tabale2 from "./Tabale2";

import tick2 from "../assets/images/tick2.png";
import Tabale3 from "./Tabale3";

function Detailsse2() {
  return (
    <div className="flex justify-between max-w-[1400px] mx-auto">
      <div>
        <div>
          <div className="flex items-center text-[11px] gap-1">
            <p>کاربر:</p>
            <p>سینا جباری</p>
            <p className="text-[#0000FF]">خروج</p>
          </div>
        </div>
        <div className="flex items-center border-b-2 border-gray-300">
          <img src={btn2} alt="/" className="w-[70px] mt-4 cursor-pointer" />
          <img src={btn1} alt="/" className="w-[120px] mt-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2">
          <img src={btn3} alt="/" className="w-[30px] mt-3" />
          <p className="mt-2 text-[13px] font-bold">اطلاعات جامع دانشجو</p>
        </div>
        <div className="relative">
          <div className="flex items-center gap-1 text-[12px] mt-4">
            <p>شماره دانشجو:</p>
            <p>402461081</p>
          </div>
          <div className="flex mr-4 items-center gap-1 text-[12px] mt-2">
            <p>شماره ترم:</p>
            <p>4022</p>
          </div>
          <div className="flex mr-4 items-center gap-1 text-[12px] mt-2">
            <p>وضع ترم:</p>
            <p>مشغول به تحصيل </p>
          </div>
          <div className="flex items-center gap-1 text-[12px] mt-2">
            <p>وضع مشروطی:</p>
            <p>عادی</p>
          </div>
          <div className="absolute top-[-1rem] right-[15rem]">
            <div className="flex absolute top-4 right-[-4rem] gap-2 items-center text-[12px] w-[200px]">
              <p>نام خانوادگي و نام :</p>
              <p>جباری سینل</p>
            </div>

            <div className="flex absolute top-9 right-[-4rem] gap-2 items-center text-[12px] w-[200px]">
              <p>شرح ترم:</p>
              <p>نيمسال دوم 1403-1402</p>
            </div>
            <div className="flex absolute top-[3.9rem] right-[-4rem] gap-2 items-center text-[12px] w-[200px]">
              <p>نوع ترم:</p>
              <p>عادی</p>
            </div>

            <div className="absolute w-[250px] right-[8rem] border-[1px] border-black">
              <p className="text-[11px] bg-[#EEEEEE] p-1">
                براي مشاهده استاد درس تحت ستون "رديف" و براي ثبت اعتراض و مشاهده
                نتيجه اعتراض تحت ستون "نمره"، فقط روي موارد زيرخط دار و قرمزرنگ
                کليک نماييد.
              </p>
            </div>
            <div className="absolute text-[12px] w-[340px] right-[26rem] top-[-4rem]">
              <p>
                بـراي مـشـاهـــده جـــزييات بيـشـتـر روي نوشته هاي زير خط دار
                کـليک کـنيـد
              </p>
            </div>
          </div>
        </div>

        {/* tabale2 */}

        <div className="flex flex-col">
          <Tabale2 />
          <Tabale3 />
        </div>
      </div>

      {/* <div>center</div> */}
      <div>
        <img src={tick2} alt="" />
      </div>
    </div>
  );
}

export default Detailsse2;
