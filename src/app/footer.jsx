import React from "react";
import Link from "next/link";
import { FaAndroid } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoLogoAppleAr } from "react-icons/io5";
import { CiApple } from "react-icons/ci";
import { FaBomb } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import { FaBucket } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full  bg-[#3094ea]">
      <div className="w-full flex flex-wrap py-14 max-w-[1200px] mx-auto text-white px-4">
        <FirstFooter />
        <SecFooter />
        <ThFooter />
      </div>
    </footer>
  );
}

function FirstFooter() {
  return (
    <div className="w-full lg:w-3/5 text-center lg:text-start">
      <h1 className="text-[25px] mb-5">امنیت حساب‌ها در بلو</h1>
      <div>
        <h3 className="text-[16px] mb-2 ">نحوه حفاظت از سرمایه مشتریان</h3>
        <p className="text-[15px] ">
          مبالغ سپرده‌‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی تعیین
          شده مورد تضمین «صندوق ضمانت سپرده‌های بانک مرکزی» است..
        </p>
      </div>
      <div className="my-6">
        <h3 className="text-[16px] mb-2">پروتکل‌های امنیتی</h3>
        <p className="text-[15px]">
          در بلو همه پروتکل‌های امنیتی در سیستم‌های زیرساخت بانکی و همچنین
          استانداردهای بانک مرکزی در خصوص تسویه وجوه و حسابداری، به‌دقت رعایت
          شده است.
        </p>
      </div>
      <div>
        <h3 className="text-[16px] mb-2">آسایش بیشتر</h3>
        <p className="text-[15px]">
          جایگزینی کارت بانکی با پول کاغذی به دلیل اشراف لحظه‌ای بر دارایی‌های
          مشتریان، سبب امنیت دوچندان حساب‌های بانکی شده است. این تجربه موفق نشان
          داده است، روند دیجیتالی شدن منجر به آسایش و راحتی بیشتری برای مشتریان
          می‌شود.
        </p>
      </div>
    </div>
  );
}

function SecFooter() {
  return (
    <div className="w-full lg:w-2/5 mt-14 lg:mt-0 -order-8 lg:order-none">
      <div className="">
        <div className="w-[165px] flex items-center h-[34px] rounded-[20px] bg-black mx-auto lg:ms-auto lg:me-0 mb-3">
          <Link
            href=""
            className="flex w-full px-5 justify-between items-center"
          >
            <FaAndroid className="text-[20px]" />
            <span className="capitalize text-[14px]">دریافت android</span>
          </Link>
        </div>
        <div className="w-[165px] flex items-center h-[34px] rounded-[20px] bg-black mx-auto lg:ms-auto lg:me-0 mb-3">
          <Link
            href=""
            className="flex w-full px-5 justify-between items-center"
          >
            <TbWorld className="text-[20px]" />
            <span className="capitalize text-[14px]">دریافت نسخه وب</span>
          </Link>
        </div>
        <div className="w-[165px] flex items-center h-[34px] rounded-[20px] bg-black mx-auto lg:ms-auto lg:me-0 mb-3">
          <Link
            href=""
            className="flex w-full px-5 justify-between items-center"
          >
            <IoLogoAppleAr className="text-[20px]" />
            <span className="capitalize text-[14px]">دریافت از سیب آپ</span>
          </Link>
        </div>
        <div className="w-[165px] flex items-center h-[34px] rounded-[20px] bg-black mx-auto lg:ms-auto lg:me-0 mb-3">
          <Link
            href=""
            className="flex w-full px-5 justify-between items-center"
          >
            <CiApple className="text-[20px]" />
            <span className="capitalize text-[14px]">دریافت از سیبچه</span>
          </Link>
        </div>
        <div className="w-[165px] flex items-center h-[34px] rounded-[20px] bg-black mx-auto lg:ms-auto lg:me-0 mb-3">
          <Link
            href=""
            className="flex w-full px-5 justify-between items-center"
          >
            <FaBomb className="text-[20px]" />
            <span className="capitalize text-[14px]">دریافت از ای اپس</span>
          </Link>
        </div>
        <div className="w-[165px] flex items-center h-[34px] rounded-[20px] bg-black mx-auto lg:ms-auto lg:me-0 mb-3">
          <Link
            href=""
            className="flex w-full px-5 justify-between items-center"
          >
            <FaBolt className="text-[20px]" />
            <span className="capitalize text-[14px]">دریافت از اناردونی</span>
          </Link>
        </div>
        <div className="w-[165px] flex items-center h-[34px] rounded-[20px] bg-black mx-auto lg:ms-auto lg:me-0 mb-3">
          <Link
            href=""
            className="flex w-full px-5 justify-between items-center"
          >
            <FaBuffer className="text-[20px]" />
            <span className="capitalize text-[14px]">دریافت از بازار</span>
          </Link>
        </div>
        <div className="w-[165px] flex items-center h-[34px] rounded-[20px] bg-black mx-auto lg:ms-auto lg:me-0 mb-3">
          <Link
            href=""
            className="flex w-full px-5 justify-between items-center"
          >
            <FaBucket className="text-[20px]" />
            <span className="capitalize text-[14px]">دریافت از مایکت</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-12 mb-12 lg:mb-0">
        <Link
          href=""
          className="flex w-[47px] h-[47px] border border-[white] rounded-[50%] justify-center items-center text-[20px]"
        >
          <IoLogoInstagram />
        </Link>
        <Link
          href=""
          className="flex w-[47px] h-[47px] border border-[white] rounded-[50%] justify-center items-center text-[20px] mx-3"
        >
          <FaTwitter />
        </Link>
        <Link
          href=""
          className="flex w-[47px] h-[47px] border border-[white] rounded-[50%] justify-center items-center text-[20px]"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}

function ThFooter() {
  return (
    <div className=" w-full flex  mt-8  flex-wrap justify-between">
      <div className="w-full lg:w-1/2 h-fit ">
        <h2 className="text-[25px] text-center lg:text-start  mb-2">
          ارتباط با ما
        </h2>
        <p className="text-center lg:text-start">
          آدرس : تهران، خیابان نلسون ماندلا، خیابان شهید رحیمی، پلاک ۴۳
        </p>
        <span className="flex justify-center lg:justify-start w-full">
          تلفن : ۸۷۶۴۱ - ۰۲۱
        </span>
      </div>

      <div className="w-full flex items-center mt-7 flex-wrap justify-between">
        <div className="text-[14px] w-full lg:w-fit flex justify-center lg:justify-start order-5 lg:order-none mt-5 lg:mt-0">
          <Link href="" className="capitalize">
            hiring
          </Link>
          <Link href="" className="mx-4 capitalize">
            about us
          </Link>
          <Link href="" className="capitalize">
            contact us
          </Link>
        </div>
        <div className="flex w-full lg:w-1/2  flex-wrap  items-center h-full lg:justify-end justify-center">
          <span className="text-[14px] text-center w-full lg:w-fit  me-2">
            Copyright © 2024 bluBank Saman. developed by danial barati
          </span>
          <figure className="flex justify-center items-center -order-9 lg:order-none">
            <Image width={40} height={40} src="/footerlogo.png" />
          </figure>
        </div>
      </div>
    </div>
  );
}
