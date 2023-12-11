import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";

import { ProductCard } from "./ProductCard";

const TopSellingOfTheMonth = () => {
  return (
    <section className=" py-[30px] md:py-[50px] lg:py-[60px] bg-[#f8f8f8]">
      <div className="  max-w-[1170px] px-[15px] mx-auto ">
        <div className="mb-[20px] lg:mb-[40px]">
          <div className=" text-[20px] mb-[10px] lg:mb-[20px] text-[#222222] font-semibold flex justify-between items-center">
            <h2>Top Selling of the Week</h2>
            <Link
              to={"/products"}
              className=" text-sm flex items-center gap-1 cursor-pointer font-medium"
            >
              See all{" "}
              <span>
                <TbMathGreater />
              </span>
            </Link>
          </div>
          <div className=" flex items-center">
            <hr className=" bg-[#0088cc] inline-block h-[2px] w-[90px]" />
            <hr className=" w-full" />
          </div>
        </div>
        <div className="grid   grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2  md:gap-4 lg:gap-6">
          <div className=" bg-[#f5f5f5] col-span-2 relative">
            <img
              src="https://jthemes.net/themes/f-html/smarttech/html/images/watch-bg.jpg"
              alt=""
            />
            <div className=" absolute inset-0  flex items-center px-[30px]">
              <div>
                <h5 className=" text-[22px] font-semibold text-black mb-[10px]">Smart Watch 2.0</h5>
                <p className=" text-[#555555] max-w-[195px] text-[14px]">
                  Space Gray Aluminum Case with Black/Volt Real Sport Band{" "}
                  <span className=" inline-block text-[#aaaaaa] ">38mm | 42mm</span>{" "}
                </p>

                <p className=" rounded-full text-[14px]  font-semibold bg-[#0088cc]  text-white hover:bg-black cursor-pointer py-[10px] px-[20px] mt-[20px] w-fit">
                  View Details
                </p>
              </div>
            </div>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default TopSellingOfTheMonth;
