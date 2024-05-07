import React from "react";

export default function SixthsSec() {
  return (
    <div className="w-full">
      <div className="w-full mx-auto md:mt-20">
        <div className="max-w-[1200px] flex flex-wrap mx-auto h-full ">
          <div className="w-full md:w-1/2 mt-20 md:mt-0 h-full">
            <div className="w-full h-full flex justify-center items-center ">
              <video
                src="/problem.mp4"
                muted
                controls={false}
                playsInline
                loop
                autoPlay
                className="w-[300px]  h-full md:w-[400px]"
              ></video>
            </div>
          </div>
          <div className="text-white w-full md:w-1/2 h-full my-auto flex flex-wrap px-10 md:px-0 pb-20 md:pb-0">
            <h2 className="text-[#3094ea] mb-5 text-[35px]">
              انتقال هوشمند پول
            </h2>
            <p className="text-[#7c7d8a] leading-[46px]">
              «انتقال هوشمند پول» یعنی راحت و بدون دردسر پولی را که می‌خواهید،
              جابه جا کنید. در بلو، لازم نیست شما بدانید پایا، ساتنا یا شبا چیست
              و برای انتقال چه میزان پول از کدامیک از آنها باید استفاده کرد. ما
              این کار را برای شما انجام می‌دهیم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
