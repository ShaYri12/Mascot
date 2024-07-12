import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-between min-h-screen px-8 py-2 bg-white w-full">
      <main className="flex flex-col items-start justify-center w-full gap-[30px] max-w-[50%]">
        <div className="flex justify-start items-center space-x-3 ps-[6px] pe-[15px] py-[6px] rounded-[40px] bg-[#D6E0FF]">
          <span className="bg-[#2f63f4] text-white text-[15.5px] font-bold px-[10px] py-[4px] rounded-[40px] uppercase">
            Updates
          </span>
          <p className="text-[14px] font-[500] text-black">
            New features coming soon
          </p>
        </div>
        <div>
          <h1 className="text-[84px] font-[700] tracking-[-4px] leading-[80px] text-black">
            Tailored Runs <br /> for Every Goal
          </h1>
        </div>
        <p className="text-[17.45px] text-black">
          Custom guided runs tailored to your health data. Our app provides the
          tools to enhance your fitness journey.
        </p>
        <div className="flex items-center space-x-4">
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-64 px-[22px] py-[13px] text-[14px] border-2 border-[#000000] rounded-full border-gray-300"
          />
          <button className="text-white bg-[#2f63f4] text-[15px] font-[500] rounded-full h-[50px] w-[215px]">
            signup for updates
          </button>
        </div>
        <div>
          <button className="flex items-center justify-center gap-[8px] text-white bg-[#000000] text-[15px] font-[500] rounded-full h-[60px] w-[215px]">
            <span>
              <img src="/assets/Apple.svg" alt="" />
            </span>
            <span className="flex flex-col items-start">
              <p>Download on the</p>
              <h3>App Store</h3>
            </span>
          </button>
        </div>
      </main>
      <div className="absolute right-[-20%] top-[-50%] rotate-[30deg] h-[600px] flex items-center justify-center w-full max-w-[40%] space-y-4">
        <div className="w-full h-full flex flex-col items-center">
          <img
            src="/assets/phone.avif"
            alt="Phone 1"
            className="object-cover  max-w-sm rounded-lg transform translate-x-8 translate-y-4"
            style={{ zIndex: 2 }}
          />
          <img
            src="/assets/phone.avif"
            alt="Phone 2"
            className=" max-w-sm rounded-lg transform translate-x-8 translate-y-8"
            style={{ zIndex: 1 }}
          />
        </div>
        <div className="w-full h-full flex items-center">
          <img
            src="/assets/phone.avif"
            alt="Phone 3"
            className="object cover max-w-sm rounded-lg transform translate-x-8 translate-y-8"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
}
