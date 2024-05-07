import React from "react";
import Image from "next/image";

export default function fourthsec() {
  return (
    <div className="w-full bg-[#3997e9] mt-10">
      <div className="w-full md:h-[80vh]  mx-auto py-16 md:p-0">
        <div className="max-w-[1200px] flex flex-wrap mx-auto px-10 h-full ">
          <div className="w-full md:w-1/2 h-full -order-7 md:order-none">
            <figure className="w-full  h-full flex justify-center items-center">
              <Image
                className="w-full "
                src="/people.png"
                width={450}
                height={50}
              />
            </figure>
          </div>
          <div className="text-white w-full md:w-1/2 h-full content-center flex flex-wrap md:ps-10 py-10 md:py-0 md:pt-10">
            <h2 className="text-white mb-5 text-[35px]">
              بلولاین؛ همیشه به وقت همه‌جا
            </h2>
            <p>
              گر سوالی دارید، در چت اپلیکیشن بلو پیام صوتی و یا متنی بگذارید، یا
              با شماره ۸۷۶۴۱-۰۲۱ تماس بگیرید. کارشناسان بلولاین همیشه آماده‌ی
              پاسخ‌گویی و حل مشکلات احتمالی شما هستند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
