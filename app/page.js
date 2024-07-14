"use client";
import React, { useEffect } from "react";
import "./styles/home.css";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up, .fade-in-right");
    elements.forEach((element) => {
      element.classList.add("opacity-100");
    });
  }, []);

  return (
    <div className=" overflow-hidden min-h-screen flex flex-col justify-between">
      <header className="flex items-center w-full z-20">
        <div className="flex items-center md:p-[35px] lg:px-20 md:px-8 px-4 py-[20px]">
          <img
            className="md:w-[173px] w-[133px]"
            src="/assets/mascotLogo.avif"
            alt=""
          />
        </div>
      </header>
      <div className="flex relative main  items-center lg:items-start   lg:px-20 md:px-8 px-4  bg-white w-full ">
        <main className="main-div flex flex-col z-30 items-start justify-center pb-4 lg:pb-12   w-full gap-[30px] lg:max-w-[60%]">
          <div className="main-badge flex justify-start items-center space-x-3 ps-[6px] pe-[15px] py-[6px] rounded-[40px] bg-[#D6E0FF] fade-in-up delay-1">
            <span className="bg-[#2f63f4] text-white text-[15.5px] font-bold px-[10px] py-[4px] rounded-[40px] ">
              Updates
            </span>
            <p className="text-[14px] font-[500] text-black">
              New features coming soon
            </p>
          </div>
          <div className="main-heading fade-in-up delay-2">
            <h1 className="text-[96px] font-[700] tracking-[-4px] leading-[80px] text-black">
              Guided Runs <br /> for Every Goal
            </h1>
          </div>
          <p className="main-para text-[20px] text-black w-full lg:w-[80%] xl:w-[55%] fade-in-up delay-3">
            Custom guided runs tailored to your health data. Our app provides
            the tools to enhance your fitness journey.
          </p>
          <div className="action-div flex flex-wrap items-center py-4 gap-4">
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-[215px] xl:w-[300px] px-[18px] xl:px-[22px] py-[11px] text-[14px] border-2 border-[#000000] rounded-full"
            />
            <button className="shadow-md text-white bg-[#2f63f4] bg-opacity-100 hover:bg-opacity-90 text-[15px] font-[500] rounded-full h-[45px] w-[215px] transition duration-300">
              Get early access
            </button>
          </div>
        </main>
        <div className=" absolute -top-[700px] -right-[300px] z-10 customhideImage gap-[80px] items-center   justify-center w-full fade-in-right max-w-[50%]">
          <div className="w-full h-full flex gap-[30px] flex-col items-center rotate-[30deg]">
            <img
              src="/assets/phone.avif"
              alt="Phone 1"
              className="max-w-[410px] rounded-lg"
              style={{ zIndex: 2 }}
            />
            <img
              src="/assets/phone.avif"
              alt="Phone 2"
              className="max-w-[410px]  rounded-lg"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="w-full h-full  rotate-[30deg] pt-[70%]">
            <img
              src="/assets/phone.avif"
              alt="Phone 3"
              className="max-w-[410px]    rounded-lg"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 z-10 customImage   fade-in-right max-w-[50%]">
          <div className="w-full h-full rotate-[30deg]">
            <img
              src="/assets/phone.avif"
              alt="Phone 3"
              className="max-w-[410px] rounded-lg"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>

        {/* mobile screen mobile-img */}
        <div className="md:hidden flex items-center justify-center w-full fade-in-right mobile-img-mobile px-4">
          <div className=" w-full h-full flex py-8 items-center justify-center">
            <img
              src="/assets/phone.avif"
              alt="Phone 1"
              className="max-w-sm rounded-lg"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
      <footer className="flex lg:px-20 lg:py-20 md:px-8 px-4 md:py-10 py-4 text-[11px] z-30 text-black">
        <p>© 2024 trymascot.com- All rights reserved.</p>
      </footer>
    </div>
  );
}
