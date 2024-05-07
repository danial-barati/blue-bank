"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import App from "./swiper";
import ThirdSec from "./thirdsec";
import FourthSec from "./fourthsec";
import FifthSec from "./fifthsec";
import SixthsSec from "./sixthSec";
import CustomizedAccordions from "./accordian";
import Headersec from "./swiper2";

export default function Home() {
  return (
    <section className="w-full  pt-[100px]">
      <FirstFigure />
      <SecSection />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthsSec />
      <CustomizedAccordions />
      <Headersec />
    </section>
  );
}

function FirstFigure() {
  const [windowWidth] = useWindowSize();
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const getImageSrc = () => {
    if (windowWidth > 768) {
      return "/winner.jpg";
    } else {
      return "/winner-mobile.jpg";
    }
  };

  return (
    <div className="w-full p-10 md:p-0 md:py-20 max-w-[1200px] mx-auto justify-center ">
      <figure className="rounded-[25px] overflow-hidden">
        <Image
          className=" cursor-pointer"
          width={1550}
          height={400}
          alt="قرعه کشی"
          src={getImageSrc()}
        />
      </figure>
    </div>
  );
}

function SecSection() {
  return (
    <div className="w-full 2xl:container mx-auto">
      <div className="max-w-[1200px] flex flex-wrap mx-auto p-10">
        <div className="w-full md:w-1/3 ">
          <video
            src="/Segmnt.mp4"
            muted
            controls={false}
            playsInline
            loop
            autoPlay
            className=""
          ></video>
        </div>
        <div className="w-full md:w-2/3">
          <App />
        </div>
      </div>
    </div>
  );
}
