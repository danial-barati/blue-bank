import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import "../../node_modules/swiper/swiper-bundle.min.css";

export default function Headersec() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchD() {
      const myD = await fetch(
        "https://663a67d51ae792804bef3e9d.mockapi.io/comment"
      );
      const mainD = await myD.json();
      setData(mainD);
    }
    fetchD();
  }, []);

  return (
    <section className=" my-20 w-full mx-auto flex flex-wrap ">
      <h1 className="w-full mb-10 text-[#3094ea] text-[30px] text-center">
        ما را در شبکه‌های اجتماعی دنبال کنید:
      </h1>
      <Swiper
        slidesPerView={0.5}
        spaceBetween={50}
        loop={true} // Add loop to enable looping
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
        modules={[Autoplay]}
      >
        {data &&
          data.map((val, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="relative rounded-[15px] p-10 shadow-custom2  flex flex-wrap h-[90%] mt-2 ">
                  <figure className="absolute top-[10px] left-[43%]">
                    <Image
                      src={val.image}
                      width={60}
                      height={50}
                      className="rounded-[50%]"
                    />
                  </figure>
                  <div className="w-full mb-8">
                    <Link href="">
                      {val.social == "linkedin" ? (
                        <FaLinkedin className="text-[#3094ea] text-[20px]" />
                      ) : val.social == "Twitter" ? (
                        <FaTwitter />
                      ) : (
                        <FaInstagram />
                      )}
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-center mb-5">{val.name}</h4>
                    <p className="leading-[30px] text-[#737789]">
                      {val.comment}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
