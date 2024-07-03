import React from "react";

function MainSaidbar() {
  return (
    <div className="max-w-[1250px] h-[603px] mt-[-10px] rounded-lg bg-[#ECE9D8] relative overflow-scroll">
      <div className="flex justify-end bg-[#ECE9D8]">
        <div className="bg-[#F5FBE9] flex items-center flex-col md:w-[600px] w-[260px] ml-3 rounded-lg mt-2 md:h-[300px] border-2">
          <span className="bg-[#F5FBE9] text-center w-full text-xl">
            پيغام هاي مهم
          </span>
          <li className="md:w-[549px] md:text-[16px] text-sm text-right bg-[#F5FBE9] text-[#D08CD7] mt-5 mr-6">
            دانشجوي گرامي; مي توانيد كليه درخواست خود(همچون دريافت انواع گواهي،
            انتخاب واحد، دانشنامه و ...) را از منوي پيشخوان خدمت ارسال نماييد.
          </li>
          <li className="md:w-[570px] text-sm text-right bg-[#F5FBE9] text-[#009900] mt-5 mr-6">
            كليه دانشجوياني كه در سامانه گلستان ~منع ثبت نام~ دارند،(اين گزينه
            از پردازش ~اطلاعات جامع دانشجو~ قابل رويت است) مي بايست در اسرع وقت
            به كارشناسان مربوطه در دانشگاه، مراجعه نمايند. در غير اين صورت از
            انتخاب واحد ايشان در ترم آينده جلوگيري به عمل خواهد آمد.
          </li>
          <li className="md:w-[570px] md:text-md text-sm text-right bg-[#F5FBE9] text-gray-700 mt-5 mr-6">
            طبق مصوبه شوراي آموزش دانشگاه، دانشجويان كارشناسي از نيمسال دوم
            95-94 مي توانند 2 درس تا سقف 6 واحد را امتحان فارغ التحصيلي دهند به
            شرط آنكه نمره مردودي (شامل حذف دروس نمي باشد) در 2 درس داشته باشند
            ولي دانشجويان قبولي ارشد از مردودي فقط در يك درس با نظر دانشكده معاف
            مي باشند.
          </li>
        </div>
      </div>

      <div className="absolute bg-[#F2F2EE] bottom-0 border-[1px] shadow-sm rounded-sm p-3 right-[10px] w-[400px]">
        <label className="text-[12px] bg-[#F2F2EE]">انتخاب سریع:</label>
      </div>
    </div>
  );
}

export default MainSaidbar;
