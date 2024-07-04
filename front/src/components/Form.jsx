import React, { useEffect, useRef, useState } from "react";
import khoroj from "../assets/images/khoroj.png";
import vorod from "../assets/images/vorod.png";

function Form() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setloading] = useState({ status: false, value: false });
  const [Info, setInfo] = useState({
    email: "",
    password: "",
  });
  const handleUserChange = (e) => {
    setInfo({
      ...Info,
      [e.target.name]: e.target.value,
    });
  };
  // ! ramtin added
  const submitHandeler = async (event) => {
    event.preventDefault();
    setloading({ status: true, value: false });
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Info }),
      });
      const result = await response.json();
<<<<<<< HEAD

      if (response.ok) {
        localStorage.setItem("token", result.user.email);
        console.log("successful");
        alert("سینا جباری خوش  امدید");
        window.location.href = "/sinajabbari";
      }

      console.log(result);
=======
      if (response.status === 200) {
        localStorage.setItem("user", result);
        setloading({ status: true, value: true });
      } else {
        throw new Error("Request failed");
      }
>>>>>>> 95f45457ede0b1462b8faf3d0db83c01c83a152d
      console.log(result.message);
    } catch (error) {
      console.log(error);
      setloading({ status: true, value: false });
    }
  };

  const alertHandeler = () => {
    alert("سیستم دانشگاه موقتا با مشکل مواجه شده است , لطفا بعدا تللاش کنید");
  };
  // !RAMTIN ADDED
  const [captcha, setCaptcha] = useState("");
  const [lines, setLines] = useState([]);
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let captchaText = "";
    for (let i = 0; i < 5; i++) {
      captchaText += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    const linesArray = [];
    for (let i = 0; i < 5; i++) {
      linesArray.push({
        x1: Math.random() * 100,
        y1: Math.random() * 30,
        x2: Math.random() * 100,
        y2: Math.random() * 30,
        stroke: getRandomColor(),
      });
    }

    setCaptcha(captchaText);
    setLines(linesArray);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <>
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
                onChange={handleUserChange}
                value={Info.email}
                name="email"
                type="text"
                className="border-[1px] outline-none text-[12px] bg-[#FFF] absolute w-[130px] border-gray-400 h-[18px]"
              />
            </div>
            <div className="mt-2">
              <label className="text-[11px] bg-[#FFF] absolute right-[4.2rem] top-[0.7rem]">
                گذرواژه:
              </label>
              <input
                onChange={handleUserChange}
                value={Info.password}
                name="password"
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

<<<<<<< HEAD
            <div className="absolute left-[-8rem] top-[-1rem] bg-[#f9f8f4] flex justify-center p-3">
              {/* capcher */}
              <div className="bg-[#f9f8f4] border-[1px] border-gray-400 w-full p-4">
                <svg width="100" height="30" className="px-2">
                  {captcha.split("").map((char, index) => (
                    <text
                      key={index}
                      x={index * 20 + 5}
                      y={20}
                      // fill={getRandomColor()}
                      fontSize="20"
                      fontFamily="Arial"
                      className="absolute top-10"
                    >
                      {char}
                    </text>
                  ))}
                  {lines.map((line, index) => (
                    <line
                      key={index}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke={line.stroke}
                      strokeWidth="2"
                    />
                  ))}
                </svg>
=======
              <div className="absolute left-[-20rem] w-[30vw] flex justify-center p-3">
                {/* capcher */}
                <div className="bg-white w-full p-4">
                  <svg width="100" height="30" className="px-2">
                    {captcha.split("").map((char, index) => (
                      <text
                        key={index}
                        x={index * 20 + 5}
                        y={20}
                        // fill={getRandomColor()}
                        fontSize="20"
                        fontFamily="Arial"
                        className="absolute top-10"
                      >
                        {char}
                      </text>
                    ))}
                    {lines.map((line, index) => (
                      <line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke={line.stroke}
                        strokeWidth="2"
                      />
                    ))}
                  </svg>
                </div>
>>>>>>> 95f45457ede0b1462b8faf3d0db83c01c83a152d
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
      {loading.status === false ? (
        ""
      ) : loading.status === true  && loading.value === true  ? (
        <div className="bg-green-800 flex items-center gap-[10rem] absolute bottom-[-9.6rem] z-20 w-full left-0">
        <p className="bg-green-800 text-white text-sm">1 پیغام</p>
        <p className="bg-green-800  text-[12px] text-white">
          ورود با موفقیت انجام شد
        </p>
      </div>
      ): <div className="bg-[#8b008b] flex items-center gap-[10rem] absolute bottom-[-9.6rem] z-20 w-full left-0">
      <p className="bg-[#8b008b] text-white text-sm">1 خطا</p>
      <p className="bg-[#8b008b]  text-[12px] text-white">
      کد1 : شناسه کاربري يا گذرواژه اشتباه است.
      </p>
    </div>}
    </>
  );
}

export default Form;
