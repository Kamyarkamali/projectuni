import React, { useState } from "react";
import khoroj from "../assets/images/khoroj.png";
import vorod from "../assets/images/vorod.png";

function Form() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const submitHandeler = (event) => {
    event.preventDefault();
  };

  const alertHandeler = () => {
    alert("سیستم دانشگاه موقتا با مشکل مواجه شده است , لطفا بعدا تللاش کنید");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={submitHandeler}
        className="relative w-[300px] h-[260px] mt-[4rem] md:ml-[4rem]"
      >
        <div className="flex flex-col items-center">
          <div className="absolute top-[-20px] left-[11.8rem]">
            <label className="text-[11px] absolute top-[2px] right-[-4.2rem] w-[200px]">
              شناسه کاربری:
            </label>
            <input
              type="text"
              className="border-[1px] outline-none text-[12px] bg-[#FFF] absolute w-[130px] border-gray-400 h-[18px]"
            />
          </div>
          <div className="mt-2">
            <label className="text-[11px] bg-[#FFF] absolute right-[4.2rem] top-[0.7rem]">
              گذرواژه:
            </label>
            <input
              type="password"
              className="border-[1px] outline-none text-[12px] w-[130px] bg-[#FFF] mr-[3.3rem] border-gray-400 h-[18px]"
            />
          </div>
          <div className="mt-2 flex items-center justify-between w-full">
            <label className="text-[11px] absolute right-[2px] top-[2.7rem]">
              لطفا کد مقابل را وارد نماييد:
            </label>
            <input
              type="text"
              className="border-[1px] outline-none text-[12px] w-[130px] mr-[6.9rem] border-gray-400 h-[18px]"
            />

            <div className="absolute left-[-5rem] border-[1px] w-[100px] flex justify-center p-3">
              {/* capcher */}
              <p>جای کپچر</p>
            </div>
          </div>
          {/* button login exit */}

          <div className="flex gap-3 justify-center ml-[6rem] mt-9 w-full">
            <a
              onClick={alertHandeler}
              className="text-[12px] md:ml-4 text-blue-600 border-b-[1px] border-blue-600 "
              href="#"
            >
              ورود از طریق احراز هویت مرکزی
            </a>
            <button className="text-[11px] bg-[#F0F0EA] hover:border-yellow-400 font-bold justify-center gap-1 flex items-center border-[1px] w-[60px] rounded-sm border-black">
              <img
                src={vorod}
                alt="login"
                className="rounded-lg w-[17px] h-[14px]"
              />
              ورود
            </button>
            <button className="text-[11px] bg-[#F0F0EA] hover:border-yellow-400 font-bold justify-center gap-1 flex items-center border-[1px] w-[60px]  rounded-sm border-black">
              <img
                className="w-[17px] rounded-full object-cover"
                src={khoroj}
                alt="exits"
              />
              خروج
            </button>
          </div>
        </div>
      </form>

      <p
        onClick={alertHandeler}
        className="text-[13px] z-20 text-right w-full text-red-500 mr-3 cursor-pointer mt-[-5rem]"
      >
        تنظيمات | بازيابي كلمه عبور دانشجويان (در صورت ادامه مشكل از لينك بالا
        استفاده نماييد) | بازيابي كلمه عبور اساتيد | | مشاهده دروس ارائه شده
      </p>
    </div>
  );
}

export default Form;
