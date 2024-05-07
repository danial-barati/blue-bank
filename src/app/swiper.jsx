import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdPercent } from "react-icons/md";
import { TbCashBanknoteOff } from "react-icons/tb";
import { TbCashBanknote } from "react-icons/tb";
import { AiOutlineDownload } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../node_modules/swiper/swiper-bundle.min.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 5500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="w-full  h-full ">
          <div className="flex flex-wrap md:ps-[140px] w-full h-full content-center">
            <h3 className="text-[#3094ea] mb-5 text-[35px] md:ms-5">
              حفاظت از سرمایه مشتریان
            </h3>
            <ul className="text-[#737789] text-[17px]">
              <li className="mb-4">
                <span className="text-[#3094ea] me-3">-</span>
                <span className="leading-[36px]">
                  مبالغ سپرده‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی
                  تعیین شده، مورد تضمین صندوق ضمانت سپرده‌های بانک مرکزی است.
                </span>
              </li>
              <li>
                <span className="text-[#3094ea] me-3">-</span>
                <span className="leading-[36px]">
                  ما همه‌ی اطلاعات حساب‌ها و مدارک هویتی مشتریان خود را محرمانه
                  تلقی کرده و متعهد می‌شویم تحت هر شرایطی جز در موارد قانونی از
                  انتشار آن جلوگیری کرده و مسئولیت این موضوع را به طور کامل
                  می‌پذیریم.
                </span>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full justify-center flex flex-wrap items-center py-8 px-5">
            <div className="md:w-1/3 w-full p-2">
              <div className="justify-center mb-3 flex">
                <MdPercent className="text-[55px] text-[#3094ea]" />
              </div>
              <div className="text-center bg-[#ebf4fc] text-[#3094ea] rounded-[15px] min-h-[200px] px-4 py-[25px]">
                <span className="text-center text-black mb-4 flex justify-center">
                  ۵ درصد سود سپرده
                </span>
                <p className="leading-[27px]">
                  در بلو برای حداقل مانده موجودی در ماه، سود سالیانه ۵ درصد به
                  صورت ماه‌شمار پرداخت می‌شود.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 w-full p-2">
              <div className="justify-center mb-3 flex">
                <TbCashBanknoteOff className="text-[55px] text-[#3094ea]" />
              </div>
              <div className="text-center bg-[#ebf4fc] text-[#3094ea] rounded-[15px] min-h-[200px] px-4 py-[25px]">
                <span className="text-center text-black mb-4 flex justify-center">
                  بدون کارمزد بازکردن حساب
                </span>
                <p className="leading-[27px]">
                  در بلو بازکردن حساب کاملا رایگان است و نیاز به پرداخت هیچ
                  کارمزدی ندارد.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 w-full p-2">
              <div className="justify-center mb-3 flex">
                <TbCashBanknote className="text-[55px] text-[#3094ea]" />
              </div>
              <div className="text-center bg-[#ebf4fc] text-[#3094ea] rounded-[15px] min-h-[200px] px-4 py-[25px]">
                <span className="text-center text-black mb-4 flex justify-center">
                  بدون حداقل موجودی حساب
                </span>
                <p className="leading-[27px]">
                  در بلو برای بازکردن حساب، نیاز به حتی یک ریال موجودی نیست.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="md:px-36 flex justify-center md:justify-start content-center w-full h-full flex-wrap md:py-32">
            <h1 className="text-[#3094ea] mb-5 text-[35px]">
              بلو؛ بانک ولی دوست‌داشتنی
            </h1>
            <p className="leading-[30px] text-[16px] text-[#737789] mb-4">
              بلو، پلتفرمی تمام دیجیتال است که همه‌ی عملیات بانکداری روی
              اپلیکیشن موبایل و کاملا آنلاین انجام می‌شود. به زبان ساده، بانکی
              است که همیشه همراه شما خواهد بود.
            </p>
            <button className="w-[120px] h-[40px] rounded-[10px] bg-[#3094ea] text-white flex text-[14px] justify-center mx-auto items-center">
              <AiOutlineDownload />
              <span>دانلود اپلیکیشن</span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
