import React from "react";

function HeaderSaidbar() {
  return (
    <div className="bg-[#ECE9D8] relative">
      <div className="absolute text-[11px] top-[-1.3rem] right-2 flex items-center gap-2">
        <p>کاربر : سينا جباري </p>
        <a className="text-[#50A1F9]" href="#">
          خروج
        </a>
      </div>
      <div className="text-[10px] flex items-center gap-1 bg-[#ECE9D8] p-1">
        <div className="absolute bottom-0">
          <button className="bg-[#F9F8F4] p-1 border-t-4 border-yellow-300 rounded-sm">
            آموزش
          </button>
        </div>
        <button className="bg-[#F9F8F4] p-1 rounded-md mr-10">پژوهش</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">دانشجویی</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">مالی و اداری</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">پیشخوان خدمات</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">ثبت نام</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">ارزشیابی</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">سیستم</button>
      </div>
    </div>
  );
}

export default HeaderSaidbar;
