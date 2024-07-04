import React from "react";

function Tabale2() {
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
            <td
              className="bg-[#ECE9D8] pt-2  border-l-[1px] border-gray-600"
              colSpan="4"
            >
              شماره گروه و درس
            </td>
            <td className="text-center border-l-[1px] border-gray-600 px-20 bg-[#ECE9D8] pt-2 ">
              نام درس
            </td>
            <td
              className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] "
              colSpan="2"
            >
              واحد
              <div className="w-full h-[1px] bg-gray-600"></div>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                کل
              </td>
              <td className="border-l-[1px] border-gray-600  bg-[#ECE9D8] px-2">
                عملی
              </td>
            </td>
            <td className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-5 px-1 ">
              نمره
            </td>{" "}
            <td className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-5 px-1  ">
              نتیجه نمره
            </td>{" "}
            <td className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-5 px-1  ">
              وضع نمره
            </td>{" "}
            <td className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-5 px-1  ">
              وضع درس
            </td>{" "}
            <td className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-5 px-1  ">
              نوع درس
            </td>{" "}
            <td className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] pt-5 px-1 ">
              نوع ثبت نام
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <td className="text-red-500 font-mono border-l-[1px] border-gray-600">
              1
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              087
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              44{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              11
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              14
            </td>
            <td className="  border-l-[1px] border-gray-600 text-center px-1">
              دیفرانسیل
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              3{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              0{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              17{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              تایید نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              اعلام نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
            <td className=" border-l-[1px] border-gray-600  px-1">پایه </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
          </tr>
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <td className="text-red-500 font-mono border-l-[1px] border-gray-600">
              1
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              087
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              44{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              11
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              14
            </td>
            <td className="  border-l-[1px] border-gray-600 text-center px-1">
              دیفرانسیل
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              3{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              0{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              17{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              تایید نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              اعلام نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
            <td className=" border-l-[1px] border-gray-600  px-1">پایه </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
          </tr>{" "}
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <td className="text-red-500 font-mono border-l-[1px] border-gray-600">
              1
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              087
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              44{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              11
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              14
            </td>
            <td className="  border-l-[1px] border-gray-600 text-center px-1">
              دیفرانسیل
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              3{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              0{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              17{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              تایید نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              اعلام نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
            <td className=" border-l-[1px] border-gray-600  px-1">پایه </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
          </tr>{" "}
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <td className="text-red-500 font-mono border-l-[1px] border-gray-600">
              1
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              087
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              44{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              11
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              14
            </td>
            <td className="  border-l-[1px] border-gray-600 text-center px-1">
              دیفرانسیل
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              3{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              0{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              17{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              تایید نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              اعلام نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
            <td className=" border-l-[1px] border-gray-600  px-1">پایه </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
          </tr>{" "}
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <td className="text-red-500 font-mono border-l-[1px] border-gray-600">
              1
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              087
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              44{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              11
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              14
            </td>
            <td className="  border-l-[1px] border-gray-600 text-center px-1">
              دیفرانسیل
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              3{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              0{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              17{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              تایید نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              اعلام نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
            <td className=" border-l-[1px] border-gray-600  px-1">پایه </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
          </tr>{" "}
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <td className="text-red-500 font-mono border-l-[1px] border-gray-600">
              1
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              087
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              44{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              11
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              14
            </td>
            <td className="  border-l-[1px] border-gray-600 text-center px-1">
              دیفرانسیل
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              3{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              0{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              17{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              تایید نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              اعلام نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
            <td className=" border-l-[1px] border-gray-600  px-1">پایه </td>
            <td className=" border-l-[1px] border-gray-600  px-1">عادی </td>
          </tr>
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <td className="text-red-500 font-mono border-l-[1px] border-gray-600">
              1
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              087
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              44{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              11
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
              14
            </td>
            <td className="  border-l-[1px] border-gray-600 text-center px-1">
              دیفرانسیل
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              3{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              0{" "}
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
              17{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              تایید نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              اعلام نشده{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              عادی{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              پایه{" "}
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
              عادی{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabale2;
