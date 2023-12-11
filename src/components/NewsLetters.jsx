import React from "react";

const NewsLetters = () => {
  return (
    <section className=" bg-[#0088cc] py-[30px] md:py-[40px]  relative overflow-hidden">
      <div className="  max-w-[1170px] px-[15px] mx-auto ">
        <div className=" absolute top-[50%] ">
          <img
            className="w-fit h-[100px] "
            src="https://jthemes.net/themes/f-html/smarttech/html/images/env-icon.png"
            alt=""
          />
        </div>

        <div className=" grid  md:grid-cols-2 gap-8 items-center ">
          <div>
            <h3 className=" text-[26px] text-white">Get Special Offers and Savings </h3>
            <p className=" text-[14px] text-[#f5f5f5]/80">
              Get all the latest information on Events, Sales and Offers.
            </p>
          </div>

          <div>
            <form action="" className=" flex relative text-[15px]">
              <input
                className="py-3  px-6 rounded-full w-full h-[50px]"
                type="text"
                placeholder="Enter your email addess here..."
              />
              <button className="py-3  px-6 rounded-r-full bg-[#006699] text-white   font-semibold  h-[50px] cursor-pointer absolute top-0 right-[-1px]">
                Subscribe!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetters;
