import React from "react";

function Tabale1() {
  return (
    <table className="border-[1px] border-gray-600 w-[500px]">
      <tr className="border-[1px] border-gray-600">
        <th className="bg-[#ECE9D8] border-l-[1px] border-gray-400 w-[5%] text-[11px]">
          ردیف
        </th>
        <th className="bg-[#ECE9D8] w-[5%] border-l-[1px] border-gray-600">
          ترم
        </th>
        <th className="bg-[#ECE9D8] w-[20%] border-l-[1px] border-gray-600">
          وضع نوع ترم
        </th>
        <th className="bg-[#ECE9D8] w-[20%] border-l-[1px] border-gray-600">
          3
        </th>
      </tr>
      <tr>
        <td className="text-center">1</td>
        <td className="text-center">4021</td>
        <td className="text-center" rowSpan="1">
          مشعول به تحصیل - عادی
        </td>
      </tr>
      <tr>
        <td className="text-center">2</td>
        <td className="text-center">4022</td>
        <td className="text-center">مشغول به تحصيل - عادی</td>
      </tr>
    </table>
  );
}

export default Tabale1;
