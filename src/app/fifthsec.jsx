import React from "react";

export default function fourthsec() {
  return (
    <div className="w-full bg-[#fbfafb]">
      <div className="w-full  mx-auto  md:p-0">
        <div className="max-w-[1200px] md:py-40 flex flex-wrap mx-auto h-full ">
          <div className="text-white w-full md:w-1/2 h-full content-center flex flex-wrap px-10 md:px-0 pb-20 md:pb-0 md:p-16 order-last md:order-none">
            <h2 className="text-[#3094ea] mb-5 text-[35px]">شناسایی هویت</h2>
            <p className="text-[#7c7d8a] leading-[46px]">
              “اینجانب مهرداد اندامی با کد ملی ۱۲۳۴۵۶۷۸۹۰ درخواست بازکردن حساب
              در بلو را دارم.” یک ویدیو ۴۵ ثانیه‌ای با عبارت خواسته مشابه نمونه
              بالا ضبط و ارسال کنید.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-20 md:mt-0 h-full">
            <figure className="w-full  h-full flex justify-center items-center">
              <video
                src="/indetify.mp4"
                muted
                controls={false}
                playsInline
                loop
                autoPlay
                className=" w-full"
              ></video>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
