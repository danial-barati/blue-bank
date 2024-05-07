"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <header className="w-full z-50 fixed h-[100px] shadow-custom bg-white ">
      <div className="flex h-full max-w-[1250px]  mx-auto justify-between items-center px-5">
        <div>
          <div className="text-white bg-[#3094ea] w-[135px] text-[16px] h-[48px] rounded-[25px] hidden justify-center items-center pb-1 pe-[2px] md:flex">
            <Link href="" className="">
              بازکردن حساب بلو
            </Link>
          </div>
        </div>
        <MenuTop />
        <div className="flex w-full md:w-auto justify-between items-center">
          <div className="flex  lg:hidden">
            <button
              onClick={() => setVisible(true)}
              className="text-[24px] font-bold"
            >
              <TfiMenu />
            </button>
          </div>
          <Link href="" className="flex ms-6">
            <Image
              src="/bluelogo.png"
              width={60}
              height={55}
              className="object-cover"
            />
          </Link>
        </div>
        <SideMenu visible={visible} setVisible={setVisible} />
      </div>
    </header>
  );
}

function MenuTop() {
  return (
    <div className=" h-full items-center text-[#737789] hidden lg:flex">
      <div className="flex items-center group  h-full">
        <Link
          href=""
          className="font-[400] group-hover:text-[#3094ea] duration-300"
        >
          درباره ما
        </Link>
      </div>
      <div className="flex items-center group  h-full mx-10">
        <Link
          href=""
          className="font-[400] group-hover:text-[#3094ea] duration-300"
        >
          بلاگ
        </Link>
      </div>
      <div className="flex items-center group  h-full">
        <Link
          href=""
          className="font-[400] group-hover:text-[#3094ea] duration-300"
        >
          سوالات متداول
        </Link>
      </div>
      <div className="flex items-center group  h-full mx-10">
        <Link
          href=""
          className="font-[400] group-hover:text-[#3094ea] duration-300"
        >
          موقعیت شغلی
        </Link>
      </div>
      <div className="flex items-center group  h-full">
        <Link
          href=""
          className="font-[400] group-hover:text-[#3094ea] duration-300"
        >
          بلوجونیور
        </Link>
      </div>
    </div>
  );
}

function SideMenu({ visible, setVisible }) {
  return (
    <div
      className={`top-0 right-0 fixed h-[100vh] bg-[#666b81ae] duration-500 overflow-hidden  ${
        visible ? "w-full" : "w-0"
      }`}
    >
      <div
        onClick={() => setVisible(false)}
        className={`h-[100vh] relative w-[350px]  bg-[#f6f6fe] duration-300  
         `}
      >
        <div className="p-12">
          <div className=" float-end">
            <button>
              <RiCloseLargeLine className="text-[23px]" />
            </button>
          </div>
          <ul className="mt-20 text-[#737789]">
            <li>
              <Link href="" className="hover:text-[#3094ea] duration-300">
                درباره ما
              </Link>
            </li>
            <li className="my-5">
              <Link href="" className="hover:text-[#3094ea] duration-300">
                بلاگ
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-[#3094ea] duration-300">
                سوالات متداول
              </Link>
            </li>
            <li className="my-5">
              <Link href="" className="hover:text-[#3094ea] duration-300">
                موقعیت شغلی
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-[#3094ea] duration-300">
                بلوجونیور
              </Link>
            </li>
          </ul>
          <div className=" w-full  mt-24">
            <div className="flex justify-center">
              <Link
                href=""
                className="w-[40px] h-[40px] justify-center flex items-center rounded-[50%] text-white bg-[#e4e4ee] hover:bg-[#3094ea] duration-300"
              >
                <IoLogoInstagram />
              </Link>
              <Link
                href=""
                className="mx-3 w-[40px] h-[40px] justify-center flex items-center rounded-[50%] text-white bg-[#e4e4ee] hover:bg-[#3094ea] duration-300"
              >
                <FaLinkedin />
              </Link>
              <Link
                href=""
                className="w-[40px] h-[40px] justify-center flex items-center rounded-[50%] text-white bg-[#e4e4ee] hover:bg-[#3094ea] duration-300"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
