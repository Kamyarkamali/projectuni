import React from "react";

function Tabale1() {
  return (
    <table className="border-[1px] border-gray-600 w-[400px]">
      <thead>
        <tr className="border-b-[1px] border-gray-600">
          <th className="text-center border-l-[1px] bg-[#ECE9D8] border-gray-600 w-[40px]">
            ردیف
          </th>
          <tr>
            <th className="w-[50px] border-l-[1px] border-gray-600 bg-[#ECE9D8]">
              ترم
            </th>

            <th className="border-l-[1px] border-gray-600 w-[140px] h-[30px] bg-[#ECE9D8]">
              وضع نوع ترم
            </th>
          </tr>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-[1px] border-gray-600">
          <th>1</th>

          <tr>
            <td className=" text-center w-[40px]">4022</td>
            <td className=" text-center w-[170px]">مشغول به تحصیل - عادی</td>
          </tr>
        </tr>

        <tr>
          <th>2</th>
          <tr>
            <td className="text-center w-[40px]">4022</td>
            <td className="text-center w-[170px] h-[19px]">
              مشغول به تحصیل - عادی
            </td>
          </tr>
        </tr>
      </tbody>
    </table>
  );
}

export default Tabale1;
