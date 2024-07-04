import React from "react";

const Tabale1 = () => {
  const clickHandeler = () => {
    window.location.href = "/sinajabbari/detailse2";
  };

  return (
    <div>
      <table className="border-[1px] border-gray-600 text-xs font-thin ">
        <thead>
          <tr className="border-b-[1px] border-gray-600 bg-[#ECE9D8]">
            <td className="text-center border-l-[1px] bg-[#ECE9D8] border-gray-600 pt-2">
              ردیف
            </td>
            <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 text-center pt-2">
              ترم
            </td>
            <td
              className="bg-[#ECE9D8] pt-5 px-10 whitespace-nowrap border-l-[1px] border-gray-600"
              colSpan="2"
            >
              وضع و نوع ترم
            </td>
            <td
              className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-2 "
              colSpan="2"
            >
              اخذ شده
              <div className="w-full h-[1px] bg-gray-600"></div>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                ترم
              </td>
              <td className="border-l-[1px] border-gray-600  bg-[#ECE9D8] px-2">
                متوالی
              </td>
            </td>
            <td
              className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-2"
              colSpan="3"
            >
              واحد گذرانده
              <div className="w-full h-[1px] bg-gray-600"></div>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                ترم
              </td>
              <td className="border-l-[1px] border-gray-600  bg-[#ECE9D8] px-2">
                متوالی
              </td>
              <td className="border-l-[1px] border-gray-600  bg-[#ECE9D8] px-2">
                کل
              </td>
            </td>
            <td className="border-l-[1px]  border-gray-600  bg-[#ECE9D8] pt-2 px-1">
              اعلام نشده
            </td>
            <td className="border-l-[1px]  border-gray-600  bg-[#ECE9D8] pt-2 px-1">
              واحد ناتمام
            </td>
            <td className="border-l-[1px]  border-gray-600  bg-[#ECE9D8] pt-2 px-1">
              حذف شده
            </td>
            <td className="border-l-[1px]  border-gray-600  bg-[#ECE9D8] pt-2 px-1">
              رد شده
            </td>
            <td
              className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-2"
              colSpan="2"
            >
              معدل
              <div className="w-full h-[1px] bg-gray-600"></div>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                ترم
              </td>
              <td className="border-l-[1px] border-gray-600  bg-[#ECE9D8] px-2">
                متوالی
              </td>
            </td>
            <td
              className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8]"
              colSpan="2"
            >
              <td className="border-l-[1px]  border-gray-600 bg-[#ECE9D8] pt-5 px-1">
                مشروط
              </td>
              <td className="  bg-[#ECE9D8] pt-5 px-1">شهریه</td>
            </td>{" "}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <th className="text-red-600 font-mono">1</th>
            <td className="">4022</td>
            <td
              className="text-center h-[19px] pl-10 whitespace-nowrap"
              colSpan="2"
            >
              مشغول به تحصیل - عاد ی
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              0
            </td>
            <td colSpan="1" className="w-fit font-mono">
              0
            </td>
            <td colSpan="1" className="w-fit font-mono">
              0
            </td>
            <td colSpan="1" className="w-fit font-mono">
              0
            </td>
            <td colSpan="1" className="w-fit font-mono">
              15.51
            </td>
            <td colSpan="1" className="w-fit font-mono">
              15.51
            </td>
            <td colSpan="2" className="w-fit text-red-500 text-center">
              ______
            </td>
          </tr>
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <th className="text-red-600 font-mono">1</th>
            <td className="">4022</td>
            <td
              onClick={clickHandeler}
              className="text-center cursor-pointer h-[19px] pl-10 whitespace-nowrap"
              colSpan="2"
            >
              مشغول به تحصیل - عاد ی
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              16
            </td>
            <td colSpan="1" className="w-fit font-mono">
              0
            </td>
            <td colSpan="1" className="w-fit font-mono">
              0
            </td>
            <td colSpan="1" className="w-fit font-mono">
              0
            </td>
            <td colSpan="1" className="w-fit font-mono">
              0
            </td>
            <td colSpan="1" className="w-fit font-mono">
             15.52
            </td>
            <td colSpan="1" className="w-fit font-mono">
             15.52
            </td>
            <td colSpan="2" className="w-fit text-red-500 text-center">
              ______
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabale1;
