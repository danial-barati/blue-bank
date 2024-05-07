"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ThirdSec() {
  const [color, setColor] = useState("blue");
  return (
    <div className="w-full 2xl:container my-10 md:my-40 mx-auto">
      <div className="max-w-[1200px] mx-auto flex flex-wrap">
        <div className="w-full md:ps-32 flex content-center flex-wrap px-10  md:w-1/2">
          <h2 className="text-[35px] mb-5 text-[#3094ea]">
            بلو، فقط آبی نیست ...
          </h2>
          <ul className="text-[#737789] leading-[36px]">
            <li>
              <span className="text-[#3094ea] text-[20px] me-2">-</span>
              <span>عضو سامانه شتاب بانک مرکزی</span>
            </li>
            <li className="my-3">
              <span className="text-[#3094ea] text-[20px] me-2">-</span>
              <span>
                ارسال رایگان کارت بانکی به آدرس دلخواه شما در کمتر از ۵ روز کاری
                در تهران و ۱۰ روز کاری در سایر نقاط کشور
              </span>
            </li>
            <li>
              <span className="text-[#3094ea] text-[20px] me-2">-</span>
              <span>
                دریافت و فعال‌سازی آنلاین رمزهای کارت از طریق اپلیکیشن بلو
              </span>
            </li>
            <li className="my-3">
              <span className="text-[#3094ea] text-[20px] me-2">-</span>
              <span>امکان مسدودکردن کارت از طریق اپلیکیشن بلو</span>
            </li>
          </ul>
        </div>
        <div className="w-full h-full md:w-1/2  relative">
          <figure className="w-full h-full">
            <Image
              src={color == "red" ? "/red.png" : "/blue.png"}
              width={400}
              height={40}
              className="w-full"
            />
          </figure>
          <div className="w-full absolute md:bottom-[100px] md:left-0 justify-center flex md:block  bottom-[30px]">
            <button
              onClick={() => setColor("red")}
              className="w-[10px] h-[10px] rounded-[50%] bg-[#ff0000]"
            ></button>
            <button
              onClick={() => setColor("blue")}
              className="w-[10px] h-[10px] rounded-[50%] bg-[#3094ea] ms-2"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
